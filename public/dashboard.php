<?php
session_start();
date_default_timezone_set('Asia/Kolkata');


$adminUsername = 'shreevallabh';
$adminPassword = 'shreevallabh@2026';
$dataFile = __DIR__ . '/contacts.json';

// Handle Delete (Must be before HTML output)
if (isset($_GET['delete_id'])) {
    $deleteId = $_GET['delete_id'];
    $contacts = json_decode(@file_get_contents($dataFile), true);
    if ($contacts) {
        $contacts = array_filter($contacts, function($contact) use ($deleteId) {
            return $contact['id'] !== $deleteId;
        });
        $contacts = array_values($contacts);
        file_put_contents($dataFile, json_encode($contacts, JSON_PRETTY_PRINT));
    }
    header("Location: dashboard.php");
    exit();
}

// Handle Logout
if (isset($_GET['logout'])) {
    session_destroy();
    header("Location: dashboard.php");
    exit();
}

// Handle Login
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['password']) && isset($_POST['username'])) {
    if ($_POST['username'] === $adminUsername && $_POST['password'] === $adminPassword) {
        $_SESSION['authenticated'] = true;
        header("Location: dashboard.php");
        exit();
    } else {
        $error = "Invalid username or password.";
    }
}

// Ensure file exists
if (!file_exists($dataFile)) {
    @file_put_contents($dataFile, json_encode([]));
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Dashboard - Shree Vallabh Ayurveda</title>
    <!-- Google Fonts for Premium Typography -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        :root {
            --bg-body: #f1f5f9;
            --bg-card: #ffffff;
            --primary: #0f172a;
            --primary-light: #1e293b;
            --accent: #d4af37;
            --accent-hover: #b5952f;
            --text-main: #334155;
            --text-dark: #0f172a;
            --text-muted: #64748b;
            --border: #e2e8f0;
            --border-light: #f1f5f9;
            --danger: #ef4444;
            --danger-hover: #dc2626;
            --danger-bg: #fee2e2;
        }

        body { 
            font-family: 'Outfit', -apple-system, BlinkMacSystemFont, sans-serif; 
            background: var(--bg-body);
            margin: 0; 
            padding: 0; 
            color: var(--text-main); 
            min-height: 100vh;
        }

        .container { max-width: 1400px; margin: 40px auto; padding: 20px; }
        
        .card { 
            background: var(--bg-card); 
            border: 1px solid var(--border);
            border-radius: 12px; 
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.01); 
            padding: 30px; 
        }

        h1 { color: var(--text-dark); margin-top: 0; font-weight: 600; letter-spacing: -0.01em; }
        
        /* Login Form Styles */
        .login-form { max-width: 400px; margin: 10vh auto; }
        .login-form .card { padding: 40px; }

        .input-group { margin-bottom: 20px; text-align: left; }
        .input-group label {
            display: block;
            font-size: 14px;
            font-weight: 500;
            margin-bottom: 8px;
            color: var(--text-dark);
        }

        input[type="text"],
        input[type="password"] { 
            width: 100%; 
            padding: 12px 16px; 
            background: #f8fafc;
            border: 1px solid var(--border); 
            border-radius: 8px; 
            box-sizing: border-box; 
            font-size: 16px; 
            color: var(--text-dark);
            font-family: 'Outfit', sans-serif;
            transition: all 0.2s ease;
        }
        input:focus {
            outline: none;
            border-color: var(--primary);
            box-shadow: 0 0 0 3px rgba(15, 23, 42, 0.1);
            background: #ffffff;
        }

        button.btn-primary { 
            background: var(--primary); 
            color: #ffffff; 
            border: none; 
            padding: 14px 24px; 
            border-radius: 8px; 
            font-size: 16px; 
            cursor: pointer; 
            width: 100%; 
            font-weight: 600; 
            font-family: 'Outfit', sans-serif;
            transition: all 0.2s ease;
        }
        button.btn-primary:hover { 
            background: var(--primary-light);
            transform: translateY(-1px);
        }

        .error { 
            background-color: var(--danger-bg); 
            color: var(--danger); 
            padding: 12px; 
            border: 1px solid rgba(239, 68, 68, 0.2);
            border-radius: 8px; 
            margin-bottom: 20px; 
            text-align: center; 
            font-size: 14px;
            font-weight: 500;
        }

        /* Dashboard Styles */
        .header-bar { 
            display: flex; 
            justify-content: space-between; 
            align-items: center; 
            margin-bottom: 30px; 
            border-bottom: 2px solid var(--border-light); 
            padding-bottom: 20px; 
        }

        .logout-btn { 
            background: var(--danger-bg); 
            color: var(--danger);
            border: none;
            font-weight: 600;
            font-family: 'Outfit', sans-serif;
            font-size: 14px;
            border-radius: 6px;
            padding: 8px 16px;
            cursor: pointer;
            transition: all 0.2s ease;
        }
        .logout-btn:hover { 
            background: var(--danger); 
            color: #ffffff;
        }

        /* Highly Readable Table */
        .table-container {
            overflow-x: auto;
            border: 1px solid var(--border);
            border-radius: 8px;
        }
        table { 
            width: 100%; 
            border-collapse: collapse; 
            background: #ffffff;
            white-space: nowrap;
        }
        th, td { 
            text-align: left; 
            padding: 14px 16px; 
            border-bottom: 1px solid var(--border); 
            font-size: 15px;
        }
        th { 
            background: #f8fafc;
            color: var(--text-muted); 
            font-weight: 600; 
            text-transform: uppercase; 
            font-size: 12px; 
            letter-spacing: 0.05em;
            border-bottom: 2px solid var(--border);
        }
        tr:last-child td {
            border-bottom: none;
        }
        tr:hover { background-color: #f8fafc; }
        
        .td-date { color: var(--text-muted); font-size: 14px; }
        .td-name { font-weight: 600; color: var(--text-dark); }
        .td-phone { font-family: monospace; font-size: 15px; color: var(--text-main); }
        .td-email { color: var(--text-muted); }
        .td-message { 
            white-space: normal; 
            min-width: 250px; 
            max-width: 400px;
            line-height: 1.5; 
            color: var(--text-main);
        }

        .badge {
            background: #fef9c3;
            color: #854d0e;
            padding: 4px 10px;
            border-radius: 20px;
            font-size: 13px;
            font-weight: 500;
            display: inline-block;
        }

        .delete-btn {
            color: var(--danger);
            text-decoration: none;
            font-size: 13px;
            font-weight: 600;
            padding: 6px 12px;
            border-radius: 4px;
            background: transparent;
            border: 1px solid var(--danger-bg);
            transition: all 0.2s;
            display: inline-block;
        }
        .delete-btn:hover {
            background: var(--danger);
            color: #ffffff;
            border-color: var(--danger);
        }

        .empty-state { 
            text-align: center; 
            padding: 60px 20px; 
            color: var(--text-muted); 
        }
        .empty-state svg {
            width: 48px;
            height: 48px;
            margin-bottom: 16px;
            opacity: 0.4;
        }
    </style>
</head>
<body>

<?php if (!isset($_SESSION['authenticated']) || $_SESSION['authenticated'] !== true): ?>
    <!-- LOGIN SCREEN -->
    <div class="container login-form">
        <div class="card">
            <div style="text-align: center; margin-bottom: 24px;">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-bottom: 12px;">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
                <h1 style="margin-bottom: 4px;">Admin Portal</h1>
                <p style="color: var(--text-muted); margin: 0; font-size: 14px;">Sign in to view patient enquiries</p>
            </div>
            
            <?php if (isset($error)): ?>
                <div class="error"><?php echo htmlspecialchars($error); ?></div>
            <?php endif; ?>

            <form method="POST" action="">
                <div class="input-group">
                    <label>Username</label>
                    <input type="text" name="username" placeholder="Enter your username" required>
                </div>
                <div class="input-group">
                    <label>Password</label>
                    <input type="password" name="password" placeholder="Enter your password" required>
                </div>
                <button type="submit" class="btn-primary">Secure Login</button>
            </form>
        </div>
    </div>

<?php else: ?>
    <!-- DASHBOARD SCREEN -->
    <div class="container">
        <div class="card">
            <div class="header-bar">
                <div style="display: flex; align-items: center; gap: 12px;">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="3" y1="9" x2="21" y2="9"></line>
                        <line x1="9" y1="21" x2="9" y2="9"></line>
                    </svg>
                    <h1 style="margin: 0; font-size: 24px;">Contact Enquiries</h1>
                </div>
                <a href="?logout=1"><button class="logout-btn">Log Out</button></a>
            </div>

            <?php
            $contacts = json_decode(@file_get_contents($dataFile), true);

            if (!$contacts || count($contacts) === 0):
            ?>
                <div class="empty-state">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                    <h3 style="color: var(--text-dark); margin-bottom: 4px; font-weight: 500;">No enquiries yet</h3>
                    <p style="margin:0; font-size: 14px;">When patients submit the contact form, they will appear here.</p>
                </div>
            <?php else: ?>
                <div class="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Patient Name</th>
                                <th>Phone</th>
                                <th>Email</th>
                                <th>Concern</th>
                                <th>Message</th>
                                <th style="text-align: center;">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php foreach ($contacts as $contact): ?>
                                <tr>
                                    <td class="td-date">
                                        <?php echo date('M d, Y', strtotime($contact['createdAt'])); ?> <br>
                                        <span style="font-size: 12px; opacity: 0.8;"><?php echo date('g:i A', strtotime($contact['createdAt'])); ?></span>
                                    </td>
                                    <td class="td-name"><?php echo htmlspecialchars($contact['fullName']); ?></td>
                                    <td class="td-phone"><?php echo htmlspecialchars($contact['phone']); ?></td>
                                    <td class="td-email"><?php echo htmlspecialchars($contact['email'] ?? '-'); ?></td>
                                    <td>
                                        <?php if (!empty($contact['concern']) && $contact['concern'] !== 'Not specified'): ?>
                                            <span class="badge"><?php echo htmlspecialchars($contact['concern']); ?></span>
                                        <?php else: ?>
                                            <span style="color: var(--text-muted);">-</span>
                                        <?php endif; ?>
                                    </td>
                                    <td class="td-message">
                                        <?php echo nl2br(htmlspecialchars($contact['message'] ?? '-')); ?>
                                    </td>
                                    <td style="text-align: center;">
                                        <a href="?delete_id=<?php echo urlencode($contact['id']); ?>" 
                                           onclick="return confirm('Delete this enquiry? This action cannot be undone.');"
                                           class="delete-btn">
                                           Delete
                                        </a>
                                    </td>
                                </tr>
                            <?php endforeach; ?>
                        </tbody>
                    </table>
                </div>
            <?php endif; ?>
        </div>
    </div>
<?php endif; ?>

</body>
</html>

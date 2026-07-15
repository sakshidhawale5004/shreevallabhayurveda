<?php
session_start();

$adminUsername = 'shreevallabh';
$adminPassword = 'shreevallabh@2026';
$dataFile = __DIR__ . '/contacts.json';

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
            --bg-dark: #0f172a;
            --bg-card: rgba(30, 41, 59, 0.7);
            --primary: #d4af37; /* Gold */
            --primary-hover: #b5952f;
            --text-main: #f8fafc;
            --text-muted: #94a3b8;
            --border: rgba(255, 255, 255, 0.1);
        }

        body { 
            font-family: 'Outfit', sans-serif; 
            background: radial-gradient(circle at top right, #1e293b, var(--bg-dark));
            background-attachment: fixed;
            margin: 0; 
            padding: 0; 
            color: var(--text-main); 
            min-height: 100vh;
        }

        .container { max-width: 1100px; margin: 40px auto; padding: 20px; }
        
        .card { 
            background: var(--bg-card); 
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 1px solid var(--border);
            border-radius: 16px; 
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5); 
            padding: 40px; 
        }

        h1 { color: var(--primary); margin-top: 0; font-weight: 600; letter-spacing: -0.02em; }
        
        .login-form { max-width: 420px; margin: 12vh auto; }
        .login-form .card { padding: 50px 40px; }

        .input-group { margin-bottom: 24px; text-align: left; }
        .input-group label {
            display: block;
            font-size: 14px;
            font-weight: 500;
            margin-bottom: 8px;
            color: var(--text-muted);
        }

        input[type="text"],
        input[type="password"] { 
            width: 100%; 
            padding: 14px 16px; 
            background: rgba(15, 23, 42, 0.6);
            border: 1px solid var(--border); 
            border-radius: 10px; 
            box-sizing: border-box; 
            font-size: 16px; 
            color: white;
            font-family: 'Outfit', sans-serif;
            transition: all 0.3s ease;
        }
        input:focus {
            outline: none;
            border-color: var(--primary);
            box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.2);
        }

        button { 
            background: linear-gradient(135deg, var(--primary), #eab308); 
            color: #000; 
            border: none; 
            padding: 14px 24px; 
            border-radius: 10px; 
            font-size: 16px; 
            cursor: pointer; 
            width: 100%; 
            font-weight: 600; 
            font-family: 'Outfit', sans-serif;
            transition: all 0.3s ease;
            box-shadow: 0 4px 14px rgba(212, 175, 55, 0.4);
        }
        button:hover { 
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(212, 175, 55, 0.6);
        }
        button:active {
            transform: translateY(0);
        }

        .error { 
            background-color: rgba(239, 68, 68, 0.1); 
            color: #fca5a5; 
            padding: 14px; 
            border: 1px solid rgba(239, 68, 68, 0.2);
            border-radius: 10px; 
            margin-bottom: 24px; 
            text-align: center; 
            font-size: 14px;
        }

        .header-bar { 
            display: flex; 
            justify-content: space-between; 
            align-items: center; 
            margin-bottom: 40px; 
            border-bottom: 1px solid var(--border); 
            padding-bottom: 20px; 
        }

        .logout-btn { 
            background: rgba(239, 68, 68, 0.1); 
            color: #fca5a5;
            width: auto; 
            padding: 10px 20px;
            box-shadow: none;
            border: 1px solid rgba(239, 68, 68, 0.2);
        }
        .logout-btn:hover { 
            background: rgba(239, 68, 68, 0.2); 
            box-shadow: 0 4px 12px rgba(239, 68, 68, 0.2);
        }

        table { width: 100%; border-collapse: collapse; margin-top: 10px; }
        th, td { text-align: left; padding: 18px 16px; border-bottom: 1px solid var(--border); }
        th { 
            color: var(--text-muted); 
            font-weight: 500; 
            text-transform: uppercase; 
            font-size: 12px; 
            letter-spacing: 0.05em;
        }
        tr { transition: background-color 0.2s ease; }
        tr:hover { background-color: rgba(255, 255, 255, 0.03); }
        
        .badge {
            background: rgba(212, 175, 55, 0.1);
            color: var(--primary);
            padding: 4px 10px;
            border-radius: 20px;
            font-size: 13px;
            font-weight: 500;
            border: 1px solid rgba(212, 175, 55, 0.2);
            display: inline-block;
        }

        .delete-link {
            color: #f87171;
            text-decoration: none;
            font-size: 13px;
            font-weight: 600;
            padding: 6px 12px;
            border-radius: 6px;
            background: rgba(239, 68, 68, 0.1);
            transition: all 0.2s;
        }
        .delete-link:hover {
            background: rgba(239, 68, 68, 0.2);
            color: #fca5a5;
        }

        .empty-state { 
            text-align: center; 
            padding: 80px 20px; 
            color: var(--text-muted); 
        }
        .empty-state svg {
            width: 64px;
            height: 64px;
            margin-bottom: 20px;
            opacity: 0.5;
        }
    </style>
</head>
<body>

<?php if (!isset($_SESSION['authenticated']) || $_SESSION['authenticated'] !== true): ?>
    <!-- LOGIN SCREEN -->
    <div class="container login-form">
        <div class="card">
            <div style="text-align: center; margin-bottom: 30px;">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-bottom: 16px;">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
                <h1 style="margin-bottom: 8px;">Admin Portal</h1>
                <p style="color: var(--text-muted); margin: 0; font-size: 15px;">Sign in to view patient enquiries</p>
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
                <button type="submit">Secure Login</button>
            </form>
        </div>
    </div>

<?php else: ?>
    <!-- DASHBOARD SCREEN -->
    <div class="container">
        <div class="card">
            <div class="header-bar">
                <div style="display: flex; align-items: center; gap: 16px;">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="3" y1="9" x2="21" y2="9"></line>
                        <line x1="9" y1="21" x2="9" y2="9"></line>
                    </svg>
                    <h1 style="margin: 0;">Contact Enquiries</h1>
                </div>
                <a href="?logout=1"><button class="logout-btn">Log Out</button></a>
            </div>

            <?php
            $contacts = json_decode(@file_get_contents($dataFile), true);
            
            // Handle Delete
            if (isset($_GET['delete_id'])) {
                $deleteId = $_GET['delete_id'];
                $contacts = array_filter($contacts, function($contact) use ($deleteId) {
                    return $contact['id'] !== $deleteId;
                });
                $contacts = array_values($contacts);
                file_put_contents($dataFile, json_encode($contacts, JSON_PRETTY_PRINT));
                header("Location: dashboard.php");
                exit();
            }

            if (!$contacts || count($contacts) === 0):
            ?>
                <div class="empty-state">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                    <h3 style="color: white; margin-bottom: 8px; font-weight: 500;">No enquiries yet</h3>
                    <p>When patients submit the contact form, they will securely appear here.</p>
                </div>
            <?php else: ?>
                <div style="overflow-x: auto;">
                    <table>
                        <thead>
                            <tr>
                                <th>Date & Time</th>
                                <th>Patient Name</th>
                                <th>Phone</th>
                                <th>Concern</th>
                                <th>Message</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php foreach ($contacts as $contact): ?>
                                <tr>
                                    <td style="color: var(--text-muted); font-size: 14px;">
                                        <?php echo date('M d, Y', strtotime($contact['createdAt'])); ?><br>
                                        <span style="font-size: 12px; opacity: 0.7;"><?php echo date('g:i A', strtotime($contact['createdAt'])); ?></span>
                                    </td>
                                    <td style="font-weight: 500; font-size: 15px;">
                                        <?php echo htmlspecialchars($contact['fullName']); ?><br>
                                        <span style="color: var(--text-muted); font-size: 13px; font-weight: 400;"><?php echo htmlspecialchars($contact['email'] ?? ''); ?></span>
                                    </td>
                                    <td style="font-family: monospace; font-size: 15px;"><?php echo htmlspecialchars($contact['phone']); ?></td>
                                    <td>
                                        <?php if (!empty($contact['concern']) && $contact['concern'] !== 'Not specified'): ?>
                                            <span class="badge"><?php echo htmlspecialchars($contact['concern']); ?></span>
                                        <?php else: ?>
                                            <span style="color: var(--text-muted);">-</span>
                                        <?php endif; ?>
                                    </td>
                                    <td style="font-size: 14px; max-width: 250px; line-height: 1.5; color: rgba(255,255,255,0.8);">
                                        <?php echo nl2br(htmlspecialchars($contact['message'] ?? '-')); ?>
                                    </td>
                                    <td>
                                        <a href="?delete_id=<?php echo urlencode($contact['id']); ?>" 
                                           onclick="return confirm('Delete this enquiry? This action cannot be undone.');"
                                           class="delete-link">
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

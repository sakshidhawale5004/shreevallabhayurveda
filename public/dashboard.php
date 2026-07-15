<?php
session_start();

$password = 'shreevallabh@2026';
$dataFile = __DIR__ . '/contacts.json';

// Handle Logout
if (isset($_GET['logout'])) {
    session_destroy();
    header("Location: dashboard.php");
    exit();
}

// Handle Login
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['password'])) {
    if ($_POST['password'] === $password) {
        $_SESSION['authenticated'] = true;
        header("Location: dashboard.php");
        exit();
    } else {
        $error = "Invalid password.";
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
    <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f8fafc; margin: 0; padding: 0; color: #0f172a; }
        .container { max-width: 1000px; margin: 50px auto; padding: 20px; }
        .card { background: white; border-radius: 12px; box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1); padding: 30px; }
        h1 { color: #1e3a8a; margin-top: 0; }
        .login-form { max-width: 400px; margin: 100px auto; }
        .input-group { margin-bottom: 20px; }
        input[type="password"] { w-full; width: 100%; padding: 12px; border: 1px solid #cbd5e1; border-radius: 8px; box-sizing: border-box; font-size: 16px; }
        button { background-color: #1e3a8a; color: white; border: none; padding: 12px 24px; border-radius: 8px; font-size: 16px; cursor: pointer; width: 100%; font-weight: bold; }
        button:hover { background-color: #1e40af; }
        .error { background-color: #fee2e2; color: #ef4444; padding: 12px; border-radius: 8px; margin-bottom: 20px; text-align: center; }
        .header-bar { display: flex; justify-content: space-between; align-items: center; margin-bottom: 30px; border-bottom: 2px solid #f1f5f9; padding-bottom: 20px; }
        .logout-btn { background-color: #ef4444; width: auto; }
        .logout-btn:hover { background-color: #dc2626; }
        table { width: 100%; border-collapse: collapse; margin-top: 20px; }
        th, td { text-align: left; padding: 15px; border-bottom: 1px solid #e2e8f0; }
        th { background-color: #f8fafc; color: #64748b; font-weight: 600; text-transform: uppercase; font-size: 13px; }
        tr:hover { background-color: #f1f5f9; }
        .empty-state { text-align: center; padding: 50px; color: #64748b; }
    </style>
</head>
<body>

<?php if (!isset($_SESSION['authenticated']) || $_SESSION['authenticated'] !== true): ?>
    <!-- LOGIN SCREEN -->
    <div class="container login-form">
        <div class="card">
            <h1 style="text-align: center; margin-bottom: 10px;">Admin Portal</h1>
            <p style="text-align: center; color: #64748b; margin-bottom: 30px;">Enter your password to access the dashboard</p>
            
            <?php if (isset($error)): ?>
                <div class="error"><?php echo htmlspecialchars($error); ?></div>
            <?php endif; ?>

            <form method="POST" action="">
                <div class="input-group">
                    <input type="password" name="password" placeholder="Password" required>
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    </div>

<?php else: ?>
    <!-- DASHBOARD SCREEN -->
    <div class="container">
        <div class="card">
            <div class="header-bar">
                <h1>Contact Submissions</h1>
                <a href="?logout=1"><button class="logout-btn">Logout</button></a>
            </div>

            <?php
            $contacts = json_decode(@file_get_contents($dataFile), true);
        
        // Handle Delete
        if (isset($_GET['delete_id'])) {
            $deleteId = $_GET['delete_id'];
            $contacts = array_filter($contacts, function($contact) use ($deleteId) {
                return $contact['id'] !== $deleteId;
            });
            $contacts = array_values($contacts); // Re-index array
            file_put_contents($dataFile, json_encode($contacts, JSON_PRETTY_PRINT));
            header("Location: dashboard.php");
            exit();
        }

        if (!$contacts || count($contacts) === 0):
        ?>
            <div class="empty-state">
                <h3>No contacts found</h3>
                <p>When users submit the contact form, they will appear here.</p>
            </div>
        <?php else: ?>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Concern</th>
                        <th>Message</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <?php foreach ($contacts as $contact): ?>
                        <tr>
                            <td><?php echo date('M d, Y g:i A', strtotime($contact['createdAt'])); ?></td>
                            <td><strong><?php echo htmlspecialchars($contact['fullName']); ?></strong></td>
                            <td><?php echo htmlspecialchars($contact['phone']); ?></td>
                            <td><?php echo htmlspecialchars($contact['email'] ?? '-'); ?></td>
                            <td><?php echo htmlspecialchars($contact['concern'] ?? '-'); ?></td>
                            <td><?php echo nl2br(htmlspecialchars($contact['message'] ?? '-')); ?></td>
                            <td>
                                <a href="?delete_id=<?php echo urlencode($contact['id']); ?>" 
                                   onclick="return confirm('Are you sure you want to delete this contact?');"
                                   style="color: #ef4444; text-decoration: none; font-size: 13px; font-weight: bold;">
                                   Delete
                                </a>
                            </td>
                        </tr>
                    <?php endforeach; ?>
                </tbody>
            </table>
        <?php endif; ?>
        </div>
    </div>
<?php endif; ?>

</body>
</html>

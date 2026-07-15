<?php
// api.php
// This file handles the backend database functionality for Hostinger Shared Hosting.

// Disable error display so warnings don't corrupt JSON output
ini_set('display_errors', 0);
error_reporting(0);
date_default_timezone_set('Asia/Kolkata');

// Allow cross-origin requests from Vercel/Localhost
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");

// Handle preflight OPTIONS request for CORS
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

$action = isset($_GET['action']) ? $_GET['action'] : '';
$dataFile = __DIR__ . '/contacts.json';

// Ensure the contacts file exists safely
if (!file_exists($dataFile)) {
    @file_put_contents($dataFile, json_encode([]));
}

// Get the raw POST data from the React app
$rawData = file_get_contents("php://input");
$data = json_decode($rawData, true);

switch ($action) {
    case 'submit':
        if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
            http_response_code(405);
            echo json_encode(["error" => "Method not allowed"]);
            exit();
        }

        if (!$data || !isset($data['fullName']) || !isset($data['phone'])) {
            http_response_code(400);
            echo json_encode(["error" => "Invalid data"]);
            exit();
        }

        $contacts = json_decode(file_get_contents($dataFile), true);
        
        $newContact = [
            "id" => uniqid(),
            "fullName" => $data['fullName'],
            "phone" => $data['phone'],
            "email" => isset($data['email']) ? $data['email'] : "",
            "concern" => isset($data['concern']) ? $data['concern'] : "",
            "message" => isset($data['message']) ? $data['message'] : "",
            "createdAt" => date("c") // ISO 8601
        ];

        // Add to beginning of array
        array_unshift($contacts, $newContact);
        
        // Save to file
        file_put_contents($dataFile, json_encode($contacts, JSON_PRETTY_PRINT));
        
        echo json_encode(["success" => true]);
        break;

    case 'login':
        if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
            http_response_code(405);
            echo json_encode(["error" => "Method not allowed"]);
            exit();
        }

        // Hardcoded credentials for admin
        if (isset($data['username']) && $data['username'] === 'shreevallabh' && 
            isset($data['password']) && $data['password'] === 'shreevallabh@2026') {
            echo json_encode(["success" => true, "token" => "shreevallabh_admin_token_2026"]);
        } else {
            http_response_code(401);
            echo json_encode(["error" => "Invalid username or password"]);
        }
        break;

    case 'get_contacts':
        if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
            http_response_code(405);
            echo json_encode(["error" => "Method not allowed"]);
            exit();
        }
        
        // Security check
        if (!isset($data['token']) || $data['token'] !== 'shreevallabh_admin_token_2026') {
            http_response_code(401);
            echo json_encode(["error" => "Unauthorized"]);
            exit();
        }

        $contacts = json_decode(file_get_contents($dataFile), true);
        echo json_encode($contacts);
        break;

    default:
        http_response_code(404);
        echo json_encode(["error" => "Action not found"]);
        break;
}
?>

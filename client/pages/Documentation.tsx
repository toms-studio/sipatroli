import { useNavigate } from "react-router-dom";

export default function Documentation() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-4"
          >
            <span className="material-icons" style={{ fontSize: "20px" }}>
              arrow_back
            </span>
            <span className="text-sm font-medium">Kembali ke Beranda</span>
          </button>
          <div>
            <h1 className="text-4xl font-bold text-gray-900 flex items-center gap-3 mb-2">
              <span style={{ fontSize: "32px" }}>🚔</span>
              SIPATROLI
            </h1>
            <p className="text-xl font-semibold text-gray-700">
              Indonesian Police Patrol Information System
            </p>
            <p className="text-gray-600 mt-2">Feature Specification Document</p>
            <p className="text-sm text-gray-500 mt-1">
              Version 1.0 | October 2025
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Executive Summary */}
        <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            Executive Summary
          </h2>
          <p className="text-gray-700 mb-6">
            SIPATROLI is a comprehensive traffic enforcement system designed for
            the Indonesian Police Force (Kepolisian Republik Indonesia). The
            system consists of two primary applications:
          </p>

          <div className="space-y-4">
            <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
              <p className="font-semibold text-gray-900 mb-2">
                1. SIPATROLI Mobile App (Android Tablet)
              </p>
              <p className="text-sm text-gray-700">
                Field application for patrol officers to monitor and respond to
                license plate recognition data in real-time during active patrols.
              </p>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-600 p-4">
              <p className="font-semibold text-gray-900 mb-2">
                2. PUSKOMANDO Web Application
              </p>
              <p className="text-sm text-gray-700">
                Command center dashboard for monitoring all active patrol units,
                managing vehicle reports, and coordinating enforcement activities
                across the jurisdiction.
              </p>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-6">
            <p className="font-semibold text-gray-900 mb-2">Core Capability</p>
            <p className="text-sm text-gray-700">
              The system integrates real-time License Plate Recognition (LPR) data
              from vehicle-mounted cameras with government vehicle databases to
              provide instant alerts about stolen vehicles, suspended licenses,
              expired registrations, and wanted persons.
            </p>
          </div>
        </section>

        {/* System Overview */}
        <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            🎯 System Overview
          </h2>

          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            System Architecture
          </h3>

          <p className="text-gray-700 mb-6">
            The SIPATROLI ecosystem consists of three main layers:
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-100 border-b border-gray-300">
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Layer
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Component
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Responsibility
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">
                    Owner
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-3 text-gray-700">Hardware Layer</td>
                  <td className="px-4 py-3 text-gray-700">
                    LPR Camera + DPU (Data Processing Unit)
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    Vehicle scanning, image capture, OCR processing, GPS tracking
                  </td>
                  <td className="px-4 py-3 text-gray-700">Hardware Provider</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-3 text-gray-700">Data Layer</td>
                  <td className="px-4 py-3 text-gray-700">
                    Government Databases
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    Vehicle ownership, driver licenses, violation history
                  </td>
                  <td className="px-4 py-3 text-gray-700">Government</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-gray-700">Application Layer</td>
                  <td className="px-4 py-3 text-gray-700">
                    SIPATROLI Mobile + PUSKOMANDO Web
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    User interface, report management, alert display
                  </td>
                  <td className="px-4 py-3 text-gray-700">This Project (In Scope)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-4">How It Works</h3>

          <div className="space-y-3">
            {[
              {
                step: "Scanning",
                desc: "Vehicle-mounted LPR cameras continuously scan nearby license plates as patrol cars move through their routes",
              },
              {
                step: "Processing",
                desc: "The DPU performs OCR (Optical Character Recognition) to extract plate numbers and captures GPS coordinates",
              },
              {
                step: "Streaming",
                desc: "Scanned data is transmitted in real-time to the backend database via 4G connection",
              },
              {
                step: "Data Integration",
                desc: "The system automatically joins LPR data with government vehicle and driver databases",
              },
              {
                step: "Alert Generation",
                desc: "If matches are found for stolen vehicles, suspended licenses, or wanted persons, immediate alerts are sent to the tablet and command center",
              },
              {
                step: "Officer Response",
                desc: "Patrol officers review alerts and take appropriate enforcement action",
              },
              {
                step: "Report Creation",
                desc: "Officers can create detailed incident reports directly from the system",
              },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4 pb-3 border-b border-gray-200 last:border-b-0">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-600 text-white text-sm font-semibold">
                    {idx + 1}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{item.step}</h4>
                  <p className="text-sm text-gray-700">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Project Scope */}
        <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            ✅ Project Scope
          </h2>

          <div className="mb-8">
            <h3 className="text-lg font-bold text-green-700 mb-4">
              IN SCOPE - What We Will Build
            </h3>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">
                  SIPATROLI Mobile Application (Android Tablet)
                </h4>
                <ul className="space-y-2 ml-4">
                  {[
                    "Secure login system with badge number authentication",
                    "Real-time display of scanned license plates during active patrol shifts",
                    "Color-coded alert system with: Red (Critical), Orange (High), Yellow (Medium), Blue (Low)",
                    "Comprehensive vehicle details view with four tabs: Vehicle, Owner, Violations, Reports",
                    "License plate search functionality",
                    "Shift statistics dashboard showing plates scanned and alert breakdown",
                    "Offline capability for viewing previously loaded data",
                    "Connection status indicators (LPR, Database, GPS, 4G)",
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="material-icons text-green-600 flex-shrink-0" style={{ fontSize: "18px" }}>
                        check_circle
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-3">
                  PUSKOMANDO Command Center Web Application
                </h4>
                <ul className="space-y-2 ml-4">
                  {[
                    "Secure login for command center operators",
                    "Real-time map view showing all active patrol units with GPS tracking",
                    "Interactive map with zoom, pan, and patrol unit selection",
                    "Patrol unit status cards with officer info and location",
                    "License plate search across all patrol units",
                    "Vehicle details view (same as mobile app)",
                    "Report creation interface with priority and type selection",
                    "Related reports view with filtering and search",
                    "System-wide statistics (active units, warnings today, critical alerts)",
                    "Vehicle incident reporting functionality",
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="material-icons text-green-600 flex-shrink-0" style={{ fontSize: "18px" }}>
                        check_circle
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-3">
                  Report Management System
                </h4>
                <ul className="space-y-2 ml-4">
                  {[
                    "Create new reports linked to license plates",
                    "Store reports in application database",
                    "Update report status (Active, Resolved, Closed)",
                    "Link reports to scanned vehicles for automatic alerts",
                    "Report history and audit trail",
                    "Report search and filtering",
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="material-icons text-green-600 flex-shrink-0" style={{ fontSize: "18px" }}>
                        check_circle
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-3">
                  Data Integration
                </h4>
                <ul className="space-y-2 ml-4">
                  {[
                    "Consume real-time LPR data stream from hardware provider's API",
                    "Integrate with government vehicle database API (read-only)",
                    "Join LPR metadata with vehicle ownership and violation data",
                    "Cache frequently accessed data for performance",
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="material-icons text-green-600 flex-shrink-0" style={{ fontSize: "18px" }}>
                        check_circle
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-red-700 mb-4">
              OUT OF SCOPE - What We Will NOT Build
            </h3>

            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-2">
                  Hardware & Infrastructure
                </p>
                <p className="ml-4 text-gray-700">
                  LPR camera hardware, DPU hardware/firmware, OCR algorithm development,
                  GPS tracking device installation, 4G/5G connectivity setup, hardware
                  mounting or vehicle installation services.
                </p>
              </div>

              <div>
                <p className="font-semibold text-gray-900 mb-2">
                  LPR Data Management
                </p>
                <p className="ml-4 text-gray-700">
                  Image processing and plate recognition, LPR database infrastructure,
                  LPR data storage/archiving, LPR accuracy tuning, camera calibration.
                </p>
              </div>

              <div>
                <p className="font-semibold text-gray-900 mb-2">
                  Government Data Systems
                </p>
                <p className="ml-4 text-gray-700">
                  Government vehicle registration database, driver license database,
                  violation record database, payment processing, court system integration,
                  government API development (we only consume).
                </p>
              </div>

              <div>
                <p className="font-semibold text-gray-900 mb-2">
                  Extended Features (Future Phase)
                </p>
                <p className="ml-4 text-gray-700">
                  ANPR for multiple countries, facial recognition, vehicle image gallery,
                  video recording, officer-command chat, route planning, traffic system
                  integration, automated ticketing, mobile payments, public portal, analytics,
                  predictive policing.
                </p>
              </div>

              <div>
                <p className="font-semibold text-gray-900 mb-2">
                  Administrative Features
                </p>
                <p className="ml-4 text-gray-700">
                  User management and RBAC (Phase 1 basic auth only), system configuration UI,
                  audit log viewer, report templates customization.
                </p>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 mt-6">
              <p className="font-semibold text-gray-900 mb-2">Important Note</p>
              <p className="text-sm text-gray-700">
                This project focuses exclusively on building user-facing applications that
                consume and display data. The underlying infrastructure (LPR hardware, databases)
                is provided by other parties. Our responsibility is to create intuitive, reliable
                interfaces that help police officers do their jobs effectively.
              </p>
            </div>
          </div>
        </section>

        {/* Mobile App Features */}
        <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            📱 SIPATROLI Mobile App - Detailed Features
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                1. Authentication & Security
              </h3>
              <ul className="space-y-2 ml-4 text-sm text-gray-700">
                <li>• <strong>Badge Number:</strong> Unique 8-digit identifier for each police officer</li>
                <li>• <strong>Password:</strong> Secure password with masked input</li>
                <li>• <strong>Session Management:</strong> Automatic logout after 8 hours or end of shift</li>
                <li>• <strong>Remember Device:</strong> Optional setting to reduce login frequency on assigned tablets</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                2. Main Dashboard
              </h3>
              <div className="ml-4 text-sm text-gray-700 space-y-3">
                <div>
                  <p className="font-semibold text-gray-900">Dashboard Components:</p>
                  <ul className="space-y-2 ml-4">
                    <li>• <strong>Header Bar:</strong> Officer name and badge number, status indicators (LPR, Database, GPS, 4G)</li>
                    <li>• <strong>LPR Scanning Section:</strong> LIVE badge, real-time plate feed with timestamp, accuracy, speed</li>
                    <li>• <strong>Color Coding:</strong> RED (Critical), ORANGE (High), YELLOW (Medium), GRAY (Normal)</li>
                    <li>• <strong>License Plate Search:</strong> Manual plate search with instant results</li>
                    <li>• <strong>Alert Statistics:</strong> Count breakdown by severity (Critical, High, Medium, Intercepted)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                3. Vehicle Details View
              </h3>
              <div className="ml-4 text-sm text-gray-700 space-y-2">
                <p><strong>Vehicle Tab:</strong> License plate, status, make/model, year, color, VIN</p>
                <p><strong>Owner Tab:</strong> Full name, NIK, date of birth, license number, phone number</p>
                <p><strong>Violations Tab:</strong> Violation history with date, type, fine amount, payment status</p>
                <p><strong>Reports Tab:</strong> Related police reports (theft, wanted persons, incidents)</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                4. Additional Mobile Features
              </h3>
              <ul className="space-y-2 ml-4 text-sm text-gray-700">
                <li>• Real-time Alerts: Audio notification for critical vehicle, vibration for high-priority</li>
                <li>• Shift Statistics: Total scanned, alerts by category, shift duration and route coverage</li>
                <li>��� Manual Search: License plate search for checkpoints or stops</li>
                <li>• Offline Mode: View previously loaded data; queue actions for sync</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Command Center Features */}
        <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            🖥️ PUSKOMANDO Command Center - Detailed Features
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                1. Command Center Login
              </h3>
              <ul className="space-y-2 ml-4 text-sm text-gray-700">
                <li>• <strong>ID Operator:</strong> Operator identifier (e.g., CMD2024001)</li>
                <li>• <strong>Password:</strong> Secure password (Kata Sandi)</li>
                <li>• <strong>Role-based Access:</strong> Permissions for operators, supervisors, administrators</li>
                <li>• <strong>Activity Logging:</strong> All actions logged for audit</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                2. Live Map Dashboard
              </h3>
              <div className="ml-4 text-sm text-gray-700 space-y-3">
                <div>
                  <p className="font-semibold text-gray-900 mb-2">Map Features:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• Base Map: OpenStreetMap (Leaflet)</li>
                    <li>• Patrol Unit Markers: Blue pins per active unit</li>
                    <li>• Real-time Updates: Markers move with location changes</li>
                    <li>• Map Controls: Zoom, Pan, Recenter, Fullscreen</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-2">Header Information:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• LIVE Badge: Real-time tracking</li>
                    <li>• Unit Aktif: Total on-duty patrol units</li>
                    <li>• Peringatan Hari Ini: Warnings issued today</li>
                    <li>• License Plate Search: Global search across units</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-2">Left Sidebar - Active Patrol Units:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• Unit ID, Status, Officer Name, Location</li>
                    <li>• Statistics: Vehicles scanned, alerts generated</li>
                    <li>• Search and filter units</li>
                    <li>• Click to focus map on selected unit</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                3. Patrol Unit Details Panel
              </h3>
              <div className="ml-4 text-sm text-gray-700 space-y-2">
                <p><strong>Informasi Unit:</strong> ID, Status, Vehicle plate, Location</p>
                <p><strong>Informasi Petugas:</strong> Name, Badge number, Shift start, Duration</p>
                <p><strong>Map Integration:</strong> Center on unit, highlight marker, popup information</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                4. Vehicle Report Creation
              </h3>
              <div className="ml-4 text-sm text-gray-700 space-y-2">
                <p><strong>Form Fields:</strong></p>
                <ul className="space-y-1 ml-4">
                  <li>• Nomor Plat (License Plate) - Text input with auto-format</li>
                  <li>• Tingkat Peringatan (Warning Level) - KRITIS, TINGGI, SEDANG, RENDAH</li>
                  <li>• Jenis Laporan (Report Type) - Dropdown with report categories</li>
                  <li>• Deskripsi (Description) - Large text area, minimum 50 characters</li>
                </ul>
                <p className="mt-2"><strong>Workflow:</strong> Operator submits report → System alerts all patrol units scanning that plate</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                5. Related Reports View
              </h3>
              <div className="ml-4 text-sm text-gray-700 space-y-2">
                <p><strong>Features:</strong></p>
                <ul className="space-y-1 ml-4">
                  <li>• Filter Tabs: Semua, Pencurian, DPO, Aktif</li>
                  <li>• Search: License plate, location, reporter</li>
                  <li>• Report Table: Plate, Type, Report Number, Status, Location, Reporter, Time</li>
                  <li>• Actions: View details, update status, add notes, close report</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* User Workflows */}
        <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            🔄 User Workflows
          </h2>

          <div className="space-y-6">
            {[
              {
                title: "Workflow 1: Patrol Officer - Normal Patrol",
                steps: [
                  "Start Shift: Officer logs into SIPATROLI tablet using badge number",
                  "Activate LPR: System confirms camera and database connections",
                  "Begin Patrol: Officer drives patrol route",
                  "Automatic Scanning: LPR camera scans passing vehicles",
                  "View Results: Scanned plates appear in real-time on dashboard",
                  "Normal Vehicles: Gray cards with no alerts",
                  "Monitor Statistics: Shift progress and scan counts",
                ],
              },
              {
                title: "Workflow 2: Patrol Officer - Critical Alert Response",
                steps: [
                  "Alert Triggered: LPR scans a stolen vehicle",
                  "Audio/Visual Notification: Tablet plays alert and shows red card",
                  "Review Details: Taps red card to view full information",
                  "Assess Situation: Check Vehicle, Owner, Violations, and Reports tabs",
                  "Take Action: Notifies command center, requests backup, stops vehicle",
                  "Document Outcome: Update report status through command center",
                ],
              },
              {
                title: "Workflow 3: Command Center Operator - Creating Alert",
                steps: [
                  "Receive Report: Citizen reports stolen vehicle or wanted person",
                  "Open PUSKOMANDO: Operator logs in",
                  "Create Report: Click 'LAPORKAN KENDARAAN'",
                  "Enter Details: License plate, priority, type, detailed description",
                  "Submit Report: Click 'KIRIM LAPORAN'",
                  "Immediate Effect: All patrol units get alerts for the plate",
                  "Monitor Map: Watch for units encountering the vehicle",
                ],
              },
              {
                title: "Workflow 4: Command Center Supervisor - Monitoring Fleet",
                steps: [
                  "View Dashboard: Open map view with all active units",
                  "Assess Coverage: Check distribution of patrol units",
                  "Review Statistics: See warnings today, identify most active units",
                  "Investigate Unit: Click unit to see scans and warnings",
                  "Search Vehicle: Type plate number to trace which units scanned it",
                ],
              },
              {
                title: "Workflow 5: Officer at Checkpoint - Manual Vehicle Check",
                steps: [
                  "Vehicle Approaches: Officer sees approaching vehicle",
                  "Manual Search: Enter license plate before LPR scans",
                  "Instant Results: System queries database and returns information",
                  "Make Decision: Green = wave through; Yellow/Orange = stop; Red = detain & backup",
                ],
              },
            ].map((workflow, idx) => (
              <div key={idx}>
                <h4 className="font-semibold text-gray-900 mb-3">{workflow.title}</h4>
                <div className="ml-4 space-y-2">
                  {workflow.steps.map((step, stepIdx) => (
                    <div key={stepIdx} className="flex gap-3 text-sm text-gray-700">
                      <span className="flex-shrink-0 font-semibold text-blue-600">
                        {stepIdx + 1}.
                      </span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* UI Guidelines */}
        <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            🎨 User Interface Guidelines
          </h2>

          <h3 className="text-lg font-semibold text-gray-900 mb-4">Design Principles</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {[
              {
                title: "1. High Contrast & Legibility",
                desc: "Large fonts for critical information, strong color differentiation for alerts, readable in bright sunlight",
              },
              {
                title: "2. Glanceable Information",
                desc: "Most important data visible without scrolling, status indicators always in view, clear visual hierarchy",
              },
              {
                title: "3. Touch-Friendly (Mobile)",
                desc: "Minimum tap target size: 48x48 px, no tiny controls, swipe gestures for common actions, usable with gloves",
              },
              {
                title: "4. Minimal Cognitive Load",
                desc: "Automatic prioritization of alerts, audio cues for critical situations, simple consistent navigation",
              },
              {
                title: "5. Responsive Layout",
                desc: "Mobile app optimized for 10\" tablets in landscape, web app responsive to various screen sizes",
              },
              {
                title: "6. Professional Aesthetic",
                desc: "Police blue and red accents, shield/badge iconography, clean authoritative design, Indonesian language",
              },
            ].map((principle, idx) => (
              <div key={idx} className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">{principle.title}</h4>
                <p className="text-sm text-gray-700">{principle.desc}</p>
              </div>
            ))}
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-4">Color System</h3>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { color: "red-600", name: "RED (#d32f2f)", usage: "Critical alerts - Stolen vehicles, wanted persons" },
              { color: "orange-600", name: "ORANGE (#f57c00)", usage: "High priority - Suspended licenses" },
              { color: "yellow-500", name: "YELLOW (#fbc02d)", usage: "Medium priority - Expired documents" },
              { color: "blue-600", name: "BLUE (#1976d2)", usage: "Low priority / Info - Minor violations" },
              { color: "green-600", name: "GREEN (#4caf50)", usage: "Active/Success - System connected" },
              { color: "gray-600", name: "GRAY (#424242)", usage: "Normal/Neutral - No violations" },
            ].map((item, idx) => (
              <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden">
                <div className={`bg-${item.color} h-16`}></div>
                <div className="p-3">
                  <p className="font-semibold text-sm text-gray-900">{item.name}</p>
                  <p className="text-xs text-gray-600 mt-1">{item.usage}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Integration Points */}
        <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            🔌 Integration Points
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Hardware Vendor API (LPR vendor)</h3>
              <ul className="space-y-2 ml-4 text-sm text-gray-700">
                <li>• <strong>Purpose:</strong> Query scanned license plate data with timestamp, GPS, camera ID, images</li>
                <li>• <strong>Data Direction:</strong> Inbound (Query-based)</li>
                <li>• <strong>Format:</strong> RESTful JSON with API key authentication</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Government APIs</h3>
              <ul className="space-y-2 ml-4 text-sm text-gray-700">
                <li>• <strong>Vehicle Database (SAMSAT):</strong> Vehicle registration, make/model/color, VIN</li>
                <li>• <strong>Owner Database:</strong> Owner name, NIK, DOB, contact</li>
                <li>• <strong>License Database:</strong> Driver's license status, validity</li>
                <li>• <strong>Violations Database (KORLANTAS):</strong> Violation history and payment status</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Our Internal Database</h3>
              <p className="text-sm text-gray-700 ml-4">
                We manage: User Accounts, Reports, Shift Records, Scan History, Alert Rules, Audit Logs
              </p>
            </div>
          </div>
        </section>

        {/* Cloud Architecture */}
        <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            ☁️ Cloud Architecture - Oracle Cloud Infrastructure
          </h2>

          <p className="text-gray-700 mb-6">
            SIPATROLI is designed as a scalable, microservices-driven architecture on Oracle Cloud
            Infrastructure (OCI) to support real-time data processing from multiple patrol units.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-4">OCI Components</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {[
              {
                title: "Compute Layer",
                items: [
                  "Oracle Kubernetes Engine (OKE)",
                  "Auto-scaling, rolling updates",
                  "Oracle Container Instances (Optional)",
                ],
              },
              {
                title: "Data Storage",
                items: [
                  "PostgreSQL for structured data",
                  "Oracle Redis for caching",
                  "Oracle NoSQL for time-series data",
                  "Object Storage for media files",
                ],
              },
              {
                title: "Messaging",
                items: [
                  "Oracle Streaming Service",
                  "Asynchronous event handling",
                  "Real-time data propagation",
                ],
              },
              {
                title: "Security",
                items: [
                  "OCI IAM for access control",
                  "OCI Vault for secrets management",
                  "TLS 1.3 encryption in transit",
                  "Encryption at rest for all data",
                ],
              },
            ].map((item, idx) => (
              <div key={idx} className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                <ul className="space-y-1">
                  {item.items.map((subitem, sidx) => (
                    <li key={sidx} className="text-sm text-gray-700">• {subitem}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-4">Microservices Architecture</h3>

          <div className="space-y-3 text-sm text-gray-700">
            {[
              { name: "Authentication Service", resp: "Login, RBAC, JWT token management" },
              { name: "LPR Data Service", resp: "Query hardware vendor API, normalize plates, caching" },
              { name: "Vehicle Data Service", resp: "Query SAMSAT, owner/license/violation data" },
              { name: "Alert & Matching Service", resp: "Match plates against active reports, publish alerts" },
              { name: "Report Management Service", resp: "CRUD for reports, search/filter, audit trail" },
              { name: "Patrol Tracking Service", resp: "Receive GPS, track shifts, compute stats" },
              { name: "API Gateway Service", resp: "NGINX/Kong/Traefik - routing, auth, rate limiting" },
            ].map((item, idx) => (
              <div key={idx} className="border-l-4 border-blue-600 pl-4">
                <p className="font-semibold text-gray-900">{item.name}</p>
                <p className="text-gray-700">{item.resp}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Data Flow Examples */}
        <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Data Flow Examples</h2>

          <div className="space-y-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">
                Scenario 1: Plate Scan Query and Alert
              </h3>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <ol className="space-y-2 list-decimal list-inside text-sm text-gray-700">
                  <li>Mobile App searches for plate "B 1234 ABC"</li>
                  <li>API Gateway routes to LPR Data Service</li>
                  <li>LPR Data Service queries hardware vendor cloud</li>
                  <li>Vehicle Data Service retrieves owner and violation data</li>
                  <li>Alert & Matching Service checks active reports</li>
                  <li>Alert published to Oracle Streaming topic</li>
                  <li>Mobile App receives real-time alert via WebSocket</li>
                  <li>Command Center Dashboard updates map</li>
                </ol>
                <p className="text-xs text-gray-600 mt-3 font-semibold">Total Latency: &lt; 3 seconds</p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-3">
                Scenario 2: Command Center Creates New Report
              </h3>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <ol className="space-y-2 list-decimal list-inside text-sm text-gray-700">
                  <li>PUSKOMANDO operator submits theft report for "B 5678 XYZ"</li>
                  <li>API Gateway validates JWT, routes to Report Management Service</li>
                  <li>Report stored in PostgreSQL</li>
                  <li>Plate added to Redis hot list with priority</li>
                  <li>Event published to report-created topic</li>
                  <li>Alert & Matching Service updates alert rules</li>
                  <li>All patrol units receive alerts for "B 5678 XYZ"</li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Scalability */}
        <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Scalability & High Availability</h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-100 border-b border-gray-300">
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Requirement</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Implementation</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Expected Performance</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    req: "Horizontal Scaling",
                    impl: "OKE auto-scales pods based on CPU/memory",
                    perf: "2x-10x traffic spikes",
                  },
                  {
                    req: "Database Replication",
                    impl: "PostgreSQL read replicas",
                    perf: "50-70% latency reduction",
                  },
                  {
                    req: "Cache Hit Rate",
                    impl: "Redis caching for 80%+ of queries",
                    perf: "Sub-10ms response time",
                  },
                  {
                    req: "Message Throughput",
                    impl: "Oracle Streaming 1M+ msg/sec",
                    perf: "Support 1000+ patrol units",
                  },
                  {
                    req: "Fault Tolerance",
                    impl: "Multi-AZ deployment",
                    perf: "99.95% uptime SLA",
                  },
                  {
                    req: "Disaster Recovery",
                    impl: "Cross-region replication",
                    perf: "RPO: 1 min, RTO: 15 min",
                  },
                ].map((item, idx) => (
                  <tr key={idx} className="border-b border-gray-200">
                    <td className="px-4 py-3 text-gray-700">{item.req}</td>
                    <td className="px-4 py-3 text-gray-700">{item.impl}</td>
                    <td className="px-4 py-3 text-gray-700">{item.perf}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Security */}
        <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            🔒 Security & Privacy Considerations
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Security Measures</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Secure login with hashed passwords</li>
                <li>• Session tokens and JWT</li>
                <li>• TLS 1.3 for data in transit</li>
                <li>• Encryption at rest</li>
                <li>• Audit logging of all data access</li>
                <li>• API rate limiting</li>
                <li>• Auto-logout on inactivity</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Privacy Requirements</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Personal data protection (NIK, names, addresses)</li>
                <li>• Purpose limitation for law enforcement</li>
                <li>• Data minimization principles</li>
                <li>• Access logging and tracking</li>
                <li>• Clear data retention policies</li>
                <li>• Right to accuracy and correction</li>
                <li>• GDPR/PDPA compliance</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Glossary */}
        <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            🎓 Glossary
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            {[
              { term: "LPR", def: "License Plate Recognition - Automated system for reading vehicle registration plates" },
              { term: "DPU", def: "Data Processing Unit - Hardware device processing camera images" },
              { term: "DPO", def: "Daftar Pencarian Orang (Wanted Person List)" },
              { term: "NIK", def: "Nomor Induk Kependudukan (National Identity Number)" },
              { term: "SIM", def: "Surat Izin Mengemudi (Driver's License)" },
              { term: "VIN", def: "Vehicle Identification Number" },
              { term: "PUSKOMANDO", def: "Pusat Komando Kepolisian (Police Command Center)" },
              { term: "SIPATROLI", def: "Sistem Informasi Patroli (Patrol Information System)" },
            ].map((item, idx) => (
              <div key={idx} className="border border-gray-200 rounded-lg p-3">
                <p className="font-semibold text-gray-900">{item.term}</p>
                <p className="text-gray-700 text-xs mt-1">{item.def}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Document Information Footer */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg shadow-lg p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-3">Document Information</h3>
          <div className="space-y-2 text-blue-100">
            <p>
              <strong>Document Title:</strong> SIPATROLI Feature Specification Document
            </p>
            <p>
              <strong>Version:</strong> 1.0
            </p>
            <p>
              <strong>Date:</strong> October 17, 2025
            </p>
            <p>
              <strong>Status:</strong> Draft for Review
            </p>
            <p>
              <strong>Target Audience:</strong> Police Department Leadership, Development Team, Project Stakeholders
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

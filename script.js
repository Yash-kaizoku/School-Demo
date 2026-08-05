
// ======================================================================
// DATA
// ======================================================================
const GALLERY_ITEMS = [
    { icon: 'fa-school', label: 'Campus View' },
    { icon: 'fa-users', label: 'Students' },
    { icon: 'fa-chalkboard', label: 'Classroom' },
    { icon: 'fa-book-open', label: 'Library' },
    { icon: 'fa-futbol', label: 'Sports' },
    { icon: 'fa-music', label: 'Music' },
    { icon: 'fa-paint-brush', label: 'Art' },
    { icon: 'fa-award', label: 'Achievements' },
];

// Mock data for tables
let studentsData = [
    { id: 1, name: 'Emma Johnson', grade: 'Grade 10', parent: 'David Johnson', contact: '555-0101', status: 'Active' },
    { id: 2, name: 'Liam Smith', grade: 'Grade 8', parent: 'Sarah Smith', contact: '555-0102', status: 'Active' },
    { id: 3, name: 'Olivia Brown', grade: 'Grade 12', parent: 'Robert Brown', contact: '555-0103', status: 'Active' },
    { id: 4, name: 'Noah Williams', grade: 'Grade 6', parent: 'Emily Williams', contact: '555-0104', status: 'Inactive' },
    { id: 5, name: 'Ava Jones', grade: 'Grade 9', parent: 'Michael Jones', contact: '555-0105', status: 'Active' },
];

let teachersData = [
    { id: 1, name: 'Dr. Alice Cooper', subject: 'Mathematics', email: 'alice@school.edu', status: 'Full-time' },
    { id: 2, name: 'Mr. Robert Frost', subject: 'English', email: 'robert@school.edu', status: 'Full-time' },
    { id: 3, name: 'Ms. Marie Curie', subject: 'Science', email: 'marie@school.edu', status: 'Part-time' },
    { id: 4, name: 'Prof. John Dewey', subject: 'History', email: 'john@school.edu', status: 'Full-time' },
];

let feesData = [
    { id: 1, student: 'Emma Johnson', grade: 'Grade 10', amount: '$450', due: '2026-05-15', status: 'Paid' },
    { id: 2, student: 'Liam Smith', grade: 'Grade 8', amount: '$400', due: '2026-05-15', status: 'Pending' },
    { id: 3, student: 'Olivia Brown', grade: 'Grade 12', amount: '$500', due: '2026-05-20', status: 'Paid' },
    { id: 4, student: 'Noah Williams', grade: 'Grade 6', amount: '$380', due: '2026-05-10', status: 'Overdue' },
];

let resultsData = [
    { id: 1, student: 'Emma Johnson', exam: 'Mid-Term', grade: 'A', percentage: '92%', term: 'Term 1' },
    { id: 2, student: 'Liam Smith', exam: 'Mid-Term', grade: 'B+', percentage: '85%', term: 'Term 1' },
    { id: 3, student: 'Olivia Brown', exam: 'Mid-Term', grade: 'A-', percentage: '89%', term: 'Term 1' },
];

let attendanceData = [
    { student: 'Emma Johnson', date: '2026-05-01', status: 'Present' },
    { student: 'Emma Johnson', date: '2026-05-02', status: 'Present' },
    { student: 'Emma Johnson', date: '2026-05-03', status: 'Absent' },
    { student: 'Liam Smith', date: '2026-05-01', status: 'Present' },
    { student: 'Liam Smith', date: '2026-05-02', status: 'Present' },
    { student: 'Olivia Brown', date: '2026-05-01', status: 'Present' },
];

let homeworkData = [
    { id: 1, subject: 'Mathematics', task: 'Solve exercises 1-10', due: '2026-05-10', grade: 'Grade 10' },
    { id: 2, subject: 'English', task: 'Write an essay on Shakespeare', due: '2026-05-12', grade: 'Grade 10' },
    { id: 3, subject: 'Science', task: 'Lab report: Photosynthesis', due: '2026-05-15', grade: 'Grade 8' },
];

let noticesData = [
    { id: 1, title: 'School Holiday', date: '2026-05-20', content: 'School will remain closed on May 20th.' },
    { id: 2, title: 'Parent-Teacher Meeting', date: '2026-05-25', content: 'PTM scheduled for May 25th at 2 PM.' },
    { id: 3, title: 'Annual Day', date: '2026-06-01', content: 'Annual Day celebrations on June 1st.' },
];

let timetableData = [
    { day: 'Monday', period1: 'Math', period2: 'English', period3: 'Science', period4: 'History' },
    { day: 'Tuesday', period1: 'Science', period2: 'Math', period3: 'English', period4: 'Art' },
    { day: 'Wednesday', period1: 'History', period2: 'Science', period3: 'Math', period4: 'PE' },
    { day: 'Thursday', period1: 'English', period2: 'History', period3: 'Science', period4: 'Math' },
    { day: 'Friday', period1: 'Art', period2: 'PE', period3: 'English', period4: 'Science' },
];

// ======================================================================
// STATE
// ======================================================================
let currentRole = 'admin'; // 'admin' | 'teacher' | 'student'
let currentPage = 'dashboard';
let isLoggedIn = false;

// ======================================================================
// DOM REFS
// ======================================================================
const publicWebsite = document.getElementById('publicWebsite');
const dashboard = document.getElementById('dashboard');
const loginModal = document.getElementById('loginModal');
const sidebarNav = document.getElementById('sidebarNav');
const mainContent = document.getElementById('mainContent');
const loginForm = document.getElementById('loginForm');
const loginError = document.getElementById('loginError');
const userAvatar = document.getElementById('userAvatar');
const userName = document.getElementById('userName');
const userRole = document.getElementById('userRole');

const roleBtns = document.querySelectorAll('.role-btn');
let selectedRole = 'admin';

// ======================================================================
// NAVIGATION CONFIG
// ======================================================================
const navConfig = {
    admin: [
        { id: 'dashboard', icon: 'fa-tachometer-alt', label: 'Dashboard' },
        { id: 'students', icon: 'fa-user-graduate', label: 'Students' },
        { id: 'teachers', icon: 'fa-chalkboard-teacher', label: 'Teachers' },
        { id: 'fees', icon: 'fa-coins', label: 'Fees' },
        { id: 'results', icon: 'fa-chart-bar', label: 'Results' },
        { id: 'attendance', icon: 'fa-calendar-check', label: 'Attendance' },
        { id: 'reports', icon: 'fa-file-alt', label: 'Reports' },
        { id: 'cms', icon: 'fa-edit', label: 'Website CMS' },
        { id: 'notifications', icon: 'fa-bell', label: 'Notifications' },
    ],
    teacher: [
        { id: 'dashboard', icon: 'fa-tachometer-alt', label: 'Dashboard' },
        { id: 'attendance', icon: 'fa-calendar-check', label: 'Attendance' },
        { id: 'homework', icon: 'fa-tasks', label: 'Homework' },
        { id: 'marks', icon: 'fa-star', label: 'Marks' },
        { id: 'timetable', icon: 'fa-clock', label: 'Timetable' },
    ],
    student: [
        { id: 'dashboard', icon: 'fa-tachometer-alt', label: 'Dashboard' },
        { id: 'fees', icon: 'fa-coins', label: 'Fees' },
        { id: 'attendance', icon: 'fa-calendar-check', label: 'Attendance' },
        { id: 'results', icon: 'fa-chart-bar', label: 'Results' },
        { id: 'homework', icon: 'fa-tasks', label: 'Homework' },
        { id: 'notices', icon: 'fa-bullhorn', label: 'Notices' },
        { id: 'timetable', icon: 'fa-clock', label: 'Timetable' },
    ],
};

const pageRenderers = {
    admin: {
        dashboard: renderAdminDashboard,
        students: renderAdminStudents,
        teachers: renderAdminTeachers,
        fees: renderAdminFees,
        results: renderAdminResults,
        attendance: renderAdminAttendance,
        reports: renderAdminReports,
        cms: renderAdminCMS,
        notifications: renderAdminNotifications,
    },
    teacher: {
        dashboard: renderTeacherDashboard,
        attendance: renderTeacherAttendance,
        homework: renderTeacherHomework,
        marks: renderTeacherMarks,
        timetable: renderTeacherTimetable,
    },
    student: {
        dashboard: renderStudentDashboard,
        fees: renderStudentFees,
        attendance: renderStudentAttendance,
        results: renderStudentResults,
        homework: renderStudentHomework,
        notices: renderStudentNotices,
        timetable: renderStudentTimetable,
    },
};

// ======================================================================
// RENDER FUNCTIONS
// ======================================================================
function renderAdminDashboard() {
    return `
    <div class="page-header">
        <div>
            <h2>Admin Dashboard</h2>
            <p class="breadcrumb">Overview of school operations</p>
        </div>
        <button class="btn btn-primary btn-sm" onclick="navigateTo('notifications')"><i class="fas fa-bell"></i> Send Notification</button>
    </div>
    <div class="stats-grid">
        <div class="stat-card"><div class="icon blue"><i class="fas fa-user-graduate"></i></div><div class="info"><h4>${studentsData.length}</h4><p>Students</p></div></div>
        <div class="stat-card"><div class="icon green"><i class="fas fa-chalkboard-teacher"></i></div><div class="info"><h4>${teachersData.length}</h4><p>Teachers</p></div></div>
        <div class="stat-card"><div class="icon yellow"><i class="fas fa-coins"></i></div><div class="info"><h4>${feesData.filter(f => f.status === 'Paid').length}/${feesData.length}</h4><p>Fees Paid</p></div></div>
        <div class="stat-card"><div class="icon red"><i class="fas fa-calendar-check"></i></div><div class="info"><h4>${attendanceData.filter(a => a.status === 'Present').length}/${attendanceData.length}</h4><p>Present Today</p></div></div>
    </div>
    <div class="grid grid-2" style="gap:24px;">
        <div class="card"><div class="card-header"><h3>Recent Students</h3><button class="btn btn-sm btn-ghost" onclick="navigateTo('students')">View All</button></div>
            <div class="table-wrap"><table>
                <thead><tr><th>Name</th><th>Grade</th><th>Status</th></tr></thead>
                <tbody>${studentsData.slice(0, 3).map(s => `<tr><td>${s.name}</td><td>${s.grade}</td><td><span class="badge ${s.status === 'Active' ? 'badge-success' : 'badge-danger'}">${s.status}</span></td></tr>`).join('')}</tbody>
            </table></div>
        </div>
        <div class="card"><div class="card-header"><h3>Recent Notices</h3><button class="btn btn-sm btn-ghost" onclick="navigateTo('notifications')">View All</button></div>
            <ul style="list-style:none;">${noticesData.slice(0, 3).map(n => `<li style="padding:8px 0; border-bottom:1px solid var(--gray-100);"><strong>${n.title}</strong> <span style="color:var(--gray-500);font-size:13px;">${n.date}</span><br><span style="font-size:14px;color:var(--gray-600);">${n.content}</span></li>`).join('')}</ul>
        </div>
    </div>
    `;
}

function renderAdminStudents() {
    return `
    <div class="page-header"><h2>Students</h2><button class="btn btn-primary btn-sm" onclick="alert('Add student form would open')"><i class="fas fa-plus"></i> Add Student</button></div>
    <div class="card"><div class="table-wrap"><table>
        <thead><tr><th>Name</th><th>Grade</th><th>Parent</th><th>Contact</th><th>Status</th><th>Actions</th></tr></thead>
        <tbody>${studentsData.map(s => `<tr><td>${s.name}</td><td>${s.grade}</td><td>${s.parent}</td><td>${s.contact}</td><td><span class="badge ${s.status === 'Active' ? 'badge-success' : 'badge-danger'}">${s.status}</span></td>
                    <td><button class="action-btn edit" onclick="alert('Edit ${s.name}')">Edit</button> <button class="action-btn delete" onclick="alert('Delete ${s.name}')">Delete</button></td></tr>`).join('')}</tbody>
    </table></div></div>
    `;
}

function renderAdminTeachers() {
    return `
    <div class="page-header"><h2>Teachers</h2><button class="btn btn-primary btn-sm" onclick="alert('Add teacher form')"><i class="fas fa-plus"></i> Add Teacher</button></div>
    <div class="card"><div class="table-wrap"><table>
        <thead><tr><th>Name</th><th>Subject</th><th>Email</th><th>Status</th><th>Actions</th></tr></thead>
        <tbody>${teachersData.map(t => `<tr><td>${t.name}</td><td>${t.subject}</td><td>${t.email}</td><td><span class="badge badge-info">${t.status}</span></td>
                    <td><button class="action-btn edit" onclick="alert('Edit ${t.name}')">Edit</button> <button class="action-btn delete" onclick="alert('Delete ${t.name}')">Delete</button></td></tr>`).join('')}</tbody>
    </table></div></div>
    `;
}

function renderAdminFees() {
    return `
    <div class="page-header"><h2>Fee Management</h2><button class="btn btn-primary btn-sm" onclick="alert('Add fee record')"><i class="fas fa-plus"></i> Add Fee</button></div>
    <div class="card"><div class="table-wrap"><table>
        <thead><tr><th>Student</th><th>Grade</th><th>Amount</th><th>Due Date</th><th>Status</th><th>Actions</th></tr></thead>
        <tbody>${feesData.map(f => `<tr><td>${f.student}</td><td>${f.grade}</td><td>${f.amount}</td><td>${f.due}</td><td><span class="badge ${f.status === 'Paid' ? 'badge-success' : f.status === 'Pending' ? 'badge-warning' : 'badge-danger'}">${f.status}</span></td>
                    <td><button class="action-btn edit" onclick="alert('Edit fee')">Edit</button> <button class="action-btn delete" onclick="alert('Delete fee')">Delete</button></td></tr>`).join('')}</tbody>
    </table></div></div>
    `;
}

function renderAdminResults() {
    return `
    <div class="page-header"><h2>Results</h2><button class="btn btn-primary btn-sm" onclick="alert('Add result')"><i class="fas fa-plus"></i> Add Result</button></div>
    <div class="card"><div class="table-wrap"><table>
        <thead><tr><th>Student</th><th>Exam</th><th>Grade</th><th>Percentage</th><th>Term</th><th>Actions</th></tr></thead>
        <tbody>${resultsData.map(r => `<tr><td>${r.student}</td><td>${r.exam}</td><td>${r.grade}</td><td>${r.percentage}</td><td>${r.term}</td>
                    <td><button class="action-btn edit" onclick="alert('Edit result')">Edit</button></td></tr>`).join('')}</tbody>
    </table></div></div>
    `;
}

function renderAdminAttendance() {
    return `
    <div class="page-header"><h2>Attendance</h2><button class="btn btn-primary btn-sm" onclick="alert('Mark attendance')"><i class="fas fa-check"></i> Mark Attendance</button></div>
    <div class="card"><div class="table-wrap"><table>
        <thead><tr><th>Student</th><th>Date</th><th>Status</th></tr></thead>
        <tbody>${attendanceData.map(a => `<tr><td>${a.student}</td><td>${a.date}</td><td><span class="badge ${a.status === 'Present' ? 'badge-success' : 'badge-danger'}">${a.status}</span></td></tr>`).join('')}</tbody>
    </table></div></div>
    `;
}

function renderAdminReports() {
    return `
    <div class="page-header"><h2>Reports</h2></div>
    <div class="grid grid-2" style="gap:24px;">
        <div class="card"><h4>Attendance Report</h4><p style="color:var(--gray-500);">Overall attendance: ${Math.round(attendanceData.filter(a => a.status === 'Present').length / attendanceData.length * 100)}%</p>
            <button class="btn btn-primary btn-sm mt-2" onclick="alert('Download report')"><i class="fas fa-download"></i> Download</button>
        </div>
        <div class="card"><h4>Fee Report</h4><p style="color:var(--gray-500);">Paid: ${feesData.filter(f => f.status === 'Paid').length}, Pending: ${feesData.filter(f => f.status === 'Pending').length}, Overdue: ${feesData.filter(f => f.status === 'Overdue').length}</p>
            <button class="btn btn-primary btn-sm mt-2" onclick="alert('Download report')"><i class="fas fa-download"></i> Download</button>
        </div>
        <div class="card"><h4>Academic Report</h4><p style="color:var(--gray-500);">Average grade: ${resultsData.reduce((acc, r) => acc + parseInt(r.percentage), 0) / resultsData.length}%</p>
            <button class="btn btn-primary btn-sm mt-2" onclick="alert('Download report')"><i class="fas fa-download"></i> Download</button>
        </div>
        <div class="card"><h4>Student Performance</h4><p style="color:var(--gray-500);">Top performer: ${resultsData.sort((a, b) => parseInt(b.percentage) - parseInt(a.percentage))[0]?.student || 'N/A'}</p>
            <button class="btn btn-primary btn-sm mt-2" onclick="alert('Download report')"><i class="fas fa-download"></i> Download</button>
        </div>
    </div>
    `;
}

function renderAdminCMS() {
    return `
    <div class="page-header"><h2>Website CMS</h2></div>
    <div class="grid grid-2" style="gap:24px;">
        <div class="card"><h4>Hero Section</h4><div class="form-group"><label>Title</label><input value="Empowering Education for Tomorrow" /></div>
            <div class="form-group"><label>Subtitle</label><input value="Ideal School ERP streamlines administration..." /></div>
            <button class="btn btn-primary btn-sm" onclick="alert('Hero updated!')">Save Changes</button>
        </div>
        <div class="card"><h4>About Section</h4><div class="form-group"><label>Content</label><textarea rows="3">A modern educational institution committed to excellence.</textarea></div>
            <button class="btn btn-primary btn-sm" onclick="alert('About updated!')">Save Changes</button>
        </div>
        <div class="card"><h4>Contact Info</h4><div class="form-group"><label>Address</label><input value="123 Education Blvd, Knowledge City" /></div>
            <div class="form-group"><label>Phone</label><input value="+1 (555) 123-4567" /></div>
            <button class="btn btn-primary btn-sm" onclick="alert('Contact updated!')">Save Changes</button>
        </div>
        <div class="card"><h4>Gallery</h4><p style="color:var(--gray-500);">${GALLERY_ITEMS.length} images in gallery.</p>
            <button class="btn btn-primary btn-sm" onclick="alert('Manage gallery')"><i class="fas fa-images"></i> Manage Gallery</button>
        </div>
    </div>
    `;
}

function renderAdminNotifications() {
    return `
    <div class="page-header"><h2>Notifications</h2><button class="btn btn-primary btn-sm" onclick="alert('New notification form')"><i class="fas fa-plus"></i> New Notice</button></div>
    <div class="card"><div class="table-wrap"><table>
        <thead><tr><th>Title</th><th>Date</th><th>Content</th><th>Actions</th></tr></thead>
        <tbody>${noticesData.map(n => `<tr><td><strong>${n.title}</strong></td><td>${n.date}</td><td>${n.content}</td>
                    <td><button class="action-btn edit" onclick="alert('Edit notice')">Edit</button> <button class="action-btn delete" onclick="alert('Delete notice')">Delete</button></td></tr>`).join('')}</tbody>
    </table></div></div>
    `;
}

// ---- TEACHER ----
function renderTeacherDashboard() {
    return `
    <div class="page-header"><h2>Teacher Dashboard</h2><p class="breadcrumb">Welcome back!</p></div>
    <div class="stats-grid">
        <div class="stat-card"><div class="icon blue"><i class="fas fa-user-graduate"></i></div><div class="info"><h4>${studentsData.length}</h4><p>Students</p></div></div>
        <div class="stat-card"><div class="icon green"><i class="fas fa-tasks"></i></div><div class="info"><h4>${homeworkData.length}</h4><p>Homework</p></div></div>
        <div class="stat-card"><div class="icon yellow"><i class="fas fa-calendar-check"></i></div><div class="info"><h4>${attendanceData.filter(a => a.status === 'Present').length}/${attendanceData.length}</h4><p>Present Today</p></div></div>
        <div class="stat-card"><div class="icon red"><i class="fas fa-clock"></i></div><div class="info"><h4>${timetableData.length}</h4><p>Class Periods</p></div></div>
    </div>
    <div class="card"><h3>Today's Schedule</h3><div class="table-wrap"><table>
        <thead><tr><th>Period</th><th>Subject</th><th>Class</th></tr></thead>
        <tbody><tr><td>1</td><td>Mathematics</td><td>Grade 10</td></tr>
            <tr><td>2</td><td>Science</td><td>Grade 8</td></tr>
            <tr><td>3</td><td>English</td><td>Grade 9</td></tr>
            <tr><td>4</td><td>History</td><td>Grade 7</td></tr></tbody>
    </table></div></div>
    `;
}

function renderTeacherAttendance() {
    return `
    <div class="page-header"><h2>Mark Attendance</h2><button class="btn btn-primary btn-sm" onclick="alert('Mark all present')"><i class="fas fa-check-double"></i> Mark All Present</button></div>
    <div class="card"><div class="table-wrap"><table>
        <thead><tr><th>Student</th><th>Grade</th><th>Status</th><th>Action</th></tr></thead>
        <tbody>${studentsData.map(s => `<tr><td>${s.name}</td><td>${s.grade}</td><td><span class="badge badge-gray">Not Marked</span></td>
                    <td><button class="action-btn edit" onclick="alert('Mark ${s.name} present')">Present</button> <button class="action-btn delete" onclick="alert('Mark ${s.name} absent')">Absent</button></td></tr>`).join('')}</tbody>
    </table></div></div>
    `;
}

function renderTeacherHomework() {
    return `
    <div class="page-header"><h2>Homework</h2><button class="btn btn-primary btn-sm" onclick="alert('Add homework')"><i class="fas fa-plus"></i> Add Homework</button></div>
    <div class="card"><div class="table-wrap"><table>
        <thead><tr><th>Subject</th><th>Task</th><th>Due Date</th><th>Grade</th><th>Actions</th></tr></thead>
        <tbody>${homeworkData.map(h => `<tr><td>${h.subject}</td><td>${h.task}</td><td>${h.due}</td><td>${h.grade}</td>
                    <td><button class="action-btn edit" onclick="alert('Edit homework')">Edit</button> <button class="action-btn delete" onclick="alert('Delete homework')">Delete</button></td></tr>`).join('')}</tbody>
    </table></div></div>
    `;
}

function renderTeacherMarks() {
    return `
    <div class="page-header"><h2>Enter Marks</h2></div>
    <div class="card"><div class="table-wrap"><table>
        <thead><tr><th>Student</th><th>Subject</th><th>Marks</th><th>Grade</th><th>Action</th></tr></thead>
        <tbody>${studentsData.map(s => `<tr><td>${s.name}</td><td>Mathematics</td><td><input type="number" placeholder="Marks" style="width:80px;padding:4px 8px;" /></td><td><input type="text" placeholder="Grade" style="width:60px;padding:4px 8px;" /></td>
                    <td><button class="action-btn edit" onclick="alert('Marks saved for ${s.name}')">Save</button></td></tr>`).join('')}</tbody>
    </table></div></div>
    `;
}

function renderTeacherTimetable() {
    return `
    <div class="page-header"><h2>Timetable</h2></div>
    <div class="card"><div class="table-wrap"><table>
        <thead><tr><th>Day</th><th>Period 1</th><th>Period 2</th><th>Period 3</th><th>Period 4</th></tr></thead>
        <tbody>${timetableData.map(t => `<tr><td><strong>${t.day}</strong></td><td>${t.period1}</td><td>${t.period2}</td><td>${t.period3}</td><td>${t.period4}</td></tr>`).join('')}</tbody>
    </table></div></div>
    `;
}

// ---- STUDENT ----
function renderStudentDashboard() {
    return `
    <div class="page-header"><h2>Student Dashboard</h2><p class="breadcrumb">Welcome back, Student!</p></div>
    <div class="stats-grid">
        <div class="stat-card"><div class="icon blue"><i class="fas fa-coins"></i></div><div class="info"><h4>${feesData.filter(f => f.status === 'Paid').length}/${feesData.length}</h4><p>Fees Paid</p></div></div>
        <div class="stat-card"><div class="icon green"><i class="fas fa-calendar-check"></i></div><div class="info"><h4>${attendanceData.filter(a => a.status === 'Present').length}/${attendanceData.length}</h4><p>Attendance</p></div></div>
        <div class="stat-card"><div class="icon yellow"><i class="fas fa-star"></i></div><div class="info"><h4>${resultsData.reduce((acc, r) => acc + parseInt(r.percentage), 0) / resultsData.length || 0}%</h4><p>Average Grade</p></div></div>
        <div class="stat-card"><div class="icon red"><i class="fas fa-tasks"></i></div><div class="info"><h4>${homeworkData.length}</h4><p>Homework</p></div></div>
    </div>
    <div class="card"><h3>Latest Notice</h3>${noticesData.length ? `<p><strong>${noticesData[0].title}</strong> — ${noticesData[0].content}</p><p style="color:var(--gray-500);font-size:13px;">${noticesData[0].date}</p>` : '<p>No notices</p>'}</div>
    `;
}

function renderStudentFees() {
    return `
    <div class="page-header"><h2>My Fees</h2></div>
    <div class="card"><div class="table-wrap"><table>
        <thead><tr><th>Student</th><th>Grade</th><th>Amount</th><th>Due Date</th><th>Status</th></tr></thead>
        <tbody>${feesData.filter(f => f.student === 'Emma Johnson').length ? feesData.filter(f => f.student === 'Emma Johnson').map(f => `<tr><td>${f.student}</td><td>${f.grade}</td><td>${f.amount}</td><td>${f.due}</td><td><span class="badge ${f.status === 'Paid' ? 'badge-success' : 'badge-warning'}">${f.status}</span></td></tr>`).join('') : feesData.slice(0, 2).map(f => `<tr><td>${f.student}</td><td>${f.grade}</td><td>${f.amount}</td><td>${f.due}</td><td><span class="badge ${f.status === 'Paid' ? 'badge-success' : 'badge-warning'}">${f.status}</span></td></tr>`).join('')}</tbody>
    </table></div></div>
    `;
}

function renderStudentAttendance() {
    return `
    <div class="page-header"><h2>My Attendance</h2></div>
    <div class="card"><div class="table-wrap"><table>
        <thead><tr><th>Date</th><th>Status</th></tr></thead>
        <tbody>${attendanceData.filter(a => a.student === 'Emma Johnson').length ? attendanceData.filter(a => a.student === 'Emma Johnson').map(a => `<tr><td>${a.date}</td><td><span class="badge ${a.status === 'Present' ? 'badge-success' : 'badge-danger'}">${a.status}</span></td></tr>`).join('') : attendanceData.slice(0, 4).map(a => `<tr><td>${a.date}</td><td><span class="badge ${a.status === 'Present' ? 'badge-success' : 'badge-danger'}">${a.status}</span></td></tr>`).join('')}</tbody>
    </table></div></div>
    `;
}

function renderStudentResults() {
    return `
    <div class="page-header"><h2>My Results</h2></div>
    <div class="card"><div class="table-wrap"><table>
        <thead><tr><th>Exam</th><th>Grade</th><th>Percentage</th><th>Term</th></tr></thead>
        <tbody>${resultsData.filter(r => r.student === 'Emma Johnson').length ? resultsData.filter(r => r.student === 'Emma Johnson').map(r => `<tr><td>${r.exam}</td><td>${r.grade}</td><td>${r.percentage}</td><td>${r.term}</td></tr>`).join('') : resultsData.map(r => `<tr><td>${r.exam}</td><td>${r.grade}</td><td>${r.percentage}</td><td>${r.term}</td></tr>`).join('')}</tbody>
    </table></div></div>
    `;
}

function renderStudentHomework() {
    return `
    <div class="page-header"><h2>My Homework</h2></div>
    <div class="card"><div class="table-wrap"><table>
        <thead><tr><th>Subject</th><th>Task</th><th>Due Date</th><th>Grade</th></tr></thead>
        <tbody>${homeworkData.map(h => `<tr><td>${h.subject}</td><td>${h.task}</td><td>${h.due}</td><td>${h.grade}</td></tr>`).join('')}</tbody>
    </table></div></div>
    `;
}

function renderStudentNotices() {
    return `
    <div class="page-header"><h2>Notices</h2></div>
    <div class="card">${noticesData.map(n => `<div style="padding:12px 0; border-bottom:1px solid var(--gray-100);"><h4>${n.title}</h4><p style="color:var(--gray-600);">${n.content}</p><span style="color:var(--gray-500);font-size:13px;">${n.date}</span></div>`).join('')}</div>
    `;
}

function renderStudentTimetable() {
    return `
    <div class="page-header"><h2>My Timetable</h2></div>
    <div class="card"><div class="table-wrap"><table>
        <thead><tr><th>Day</th><th>Period 1</th><th>Period 2</th><th>Period 3</th><th>Period 4</th></tr></thead>
        <tbody>${timetableData.map(t => `<tr><td><strong>${t.day}</strong></td><td>${t.period1}</td><td>${t.period2}</td><td>${t.period3}</td><td>${t.period4}</td></tr>`).join('')}</tbody>
    </table></div></div>
    `;
}

// ======================================================================
// NAVIGATION HELPERS
// ======================================================================
function navigateTo(pageId) {
    currentPage = pageId;
    // Update nav active
    document.querySelectorAll('.sidebar-nav .nav-item').forEach(el => {
        el.classList.toggle('active', el.dataset.page === pageId);
    });
    renderPage(pageId);
}

function renderPage(pageId) {
    const renderFn = pageRenderers[currentRole]?.[pageId];
    if (renderFn) {
        mainContent.innerHTML = renderFn();
        // Re-bind any inline onclick navigateTo calls
    } else {
        mainContent.innerHTML = `<div class="card"><h3>Page not found</h3></div>`;
    }
}

function buildSidebar(role) {
    const items = navConfig[role] || [];
    sidebarNav.innerHTML = items.map(item =>
        `<div class="nav-item ${item.id === 'dashboard' ? 'active' : ''}" data-page="${item.id}" onclick="navigateTo('${item.id}')">
        <i class="fas ${item.icon}"></i> ${item.label}
    </div>`
    ).join('');
    // Set first page
    if (items.length) {
        currentPage = 'dashboard';
        renderPage('dashboard');
    }
}

// ======================================================================
// LOGIN / LOGOUT
// ======================================================================
function login(role, email) {
    currentRole = role;
    isLoggedIn = true;

    // Set user info
    const names = {
        admin: { name: 'Admin User', avatar: 'A', roleLabel: 'Administrator' },
        teacher: { name: 'Teacher User', avatar: 'T', roleLabel: 'Teacher' },
        student: { name: 'Student User', avatar: 'S', roleLabel: 'Student' },
    };
    const info = names[role] || names.admin;
    userName.textContent = info.name;
    userAvatar.textContent = info.avatar;
    userRole.textContent = info.roleLabel;

    // Show dashboard, hide public
    publicWebsite.style.display = 'none';
    dashboard.classList.add('active');

    // Build sidebar
    buildSidebar(role);

    // Close modal
    loginModal.classList.remove('active');
    loginError.classList.remove('show');
}

function logout() {
    isLoggedIn = false;
    currentRole = 'admin';
    dashboard.classList.remove('active');
    publicWebsite.style.display = 'block';
    // Reset nav links
    document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
    document.querySelector('.nav-links a[href="#home"]')?.classList.add('active');
}

// ======================================================================
// EVENT LISTENERS
// ======================================================================

// Login modal open
document.getElementById('openLoginBtn').addEventListener('click', () => {
    loginModal.classList.add('active');
});
document.getElementById('heroLoginBtn').addEventListener('click', () => {
    loginModal.classList.add('active');
});
document.getElementById('closeLoginModal').addEventListener('click', () => {
    loginModal.classList.remove('active');
    loginError.classList.remove('show');
});
loginModal.addEventListener('click', (e) => {
    if (e.target === loginModal) {
        loginModal.classList.remove('active');
        loginError.classList.remove('show');
    }
});

// Role selector in modal
roleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        roleBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        selectedRole = btn.dataset.role;
        // Update email placeholder
        const emailInput = document.getElementById('loginEmail');
        const placeholders = {
            admin: 'admin@school.edu',
            teacher: 'teacher@school.edu',
            student: 'student@school.edu',
        };
        emailInput.placeholder = placeholders[selectedRole] || 'email@school.edu';
        emailInput.value = placeholders[selectedRole] || '';
    });
});

// Login form
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value.trim();

    // Simple demo auth
    const valid = {
        admin: { email: 'admin@school.edu', pass: 'password' },
        teacher: { email: 'teacher@school.edu', pass: 'password' },
        student: { email: 'student@school.edu', pass: 'password' },
    };

    const creds = valid[selectedRole];
    if (creds && email === creds.email && password === creds.pass) {
        login(selectedRole, email);
    } else {
        loginError.textContent = `Invalid credentials for ${selectedRole}. Try: ${creds?.email || 'email@school.edu'} / password`;
        loginError.classList.add('show');
    }
});

// Logout
document.getElementById('logoutBtn').addEventListener('click', logout);

// Mobile nav toggle
document.getElementById('mobileToggle').addEventListener('click', () => {
    document.getElementById('navLinks').classList.toggle('open');
});

// Gallery render
(function renderGallery() {
    const grid = document.getElementById('galleryGrid');
    grid.innerHTML = GALLERY_ITEMS.map(item =>
        `<div class="gallery-item">
        <i class="fas ${item.icon}"></i>
        <div class="overlay">${item.label}</div>
    </div>`
    ).join('');
})();

// Smooth scroll for nav links
document.querySelectorAll('.nav-links a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(a.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
        document.querySelectorAll('.nav-links a').forEach(l => l.classList.remove('active'));
        a.classList.add('active');
        // Close mobile menu
        document.getElementById('navLinks').classList.remove('open');
    });
});

// Admission form
document.getElementById('admissionForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you! Your enquiry has been submitted. We will contact you shortly.');
    e.target.reset();
});

// Keyboard shortcut: Escape to close modal
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && loginModal.classList.contains('active')) {
        loginModal.classList.remove('active');
        loginError.classList.remove('show');
    }
});

// ======================================================================
// INIT
// ======================================================================
console.log('🏫 Ideal School ERP loaded successfully!');
console.log('🔑 Demo logins: admin@school.edu / password | teacher@school.edu | student@school.edu');

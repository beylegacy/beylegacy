// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Set current date
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('dateInput').value = today;

    // Update time every second
    updateTime();
    setInterval(updateTime, 1000);

    // Load saved data if available
    loadFromLocalStorage();

    // Update summary
    updateSummary();
});

// Update current time display
function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
    });
    document.getElementById('currentTime').textContent = timeString;
}

// Tab switching functionality
function showTab(tabName) {
    // Hide all tab contents
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
        content.classList.remove('active');
    });

    // Remove active class from all buttons
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(button => {
        button.classList.remove('active');
    });

    // Show selected tab
    document.getElementById(tabName).classList.add('active');

    // Add active class to clicked button
    event.target.classList.add('active');

    // Update summary when switching to export tab
    if (tabName === 'export') {
        updateSummary();
    }
}

// Add guest entry
function addGuest(containerId) {
    const container = document.getElementById(containerId);
    const guestEntry = document.createElement('div');
    guestEntry.className = 'guest-entry';
    guestEntry.innerHTML = `
        <div class="guest-form">
            <input type="text" placeholder="Guest Name (from valid ID)" required>
            <input type="text" placeholder="Apt #" required>
            <input type="time" required>
            <textarea placeholder="Notes (incidents, special instructions, etc.)" rows="2"></textarea>
            <button class="btn" onclick="removeGuest(this)">Remove</button>
        </div>
    `;
    container.appendChild(guestEntry);
}

// Remove guest entry
function removeGuest(button) {
    const guestEntry = button.closest('.guest-entry');
    const container = guestEntry.parentElement;

    // Only remove if there's more than one entry
    if (container.children.length > 1) {
        guestEntry.remove();
    } else {
        // Clear the inputs instead of removing
        const inputs = guestEntry.querySelectorAll('input, textarea');
        inputs.forEach(input => input.value = '');
    }
}

// Update property selection
function updateProperty() {
    const property = document.getElementById('propertySelect').value;
    console.log('Property changed to:', property);
    // Auto-save when property changes
    saveToLocalStorage();
}

// Update package total
function updatePackageTotal() {
    let total = 0;
    const packageInputs = document.querySelectorAll('.package-section input[type="number"]');

    packageInputs.forEach(input => {
        total += parseInt(input.value) || 0;
    });

    document.getElementById('grandTotal').textContent = total;

    // Auto-save when packages change
    saveToLocalStorage();
}

// Save all data to localStorage
function saveToLocalStorage() {
    const data = {
        property: document.getElementById('propertySelect').value,
        date: document.getElementById('dateInput').value,
        agent: document.getElementById('agentName').value,
        shiftTime: document.getElementById('shiftTime').value,
        shift1Notes: document.getElementById('shift1Notes').value,
        shift2Notes: document.getElementById('shift2Notes').value,
        shift3Notes: document.getElementById('shift3Notes').value,
        engineeringNotes: document.getElementById('engineeringNotes').value,
        residentNotes: document.getElementById('residentNotes').value,
        checklist: Array.from(document.querySelectorAll('.checklist-item input[type="checkbox"]'))
            .map(cb => cb.checked),
        packages: Array.from(document.querySelectorAll('.package-section input[type="number"]'))
            .map(input => input.value),
        shift1Guests: getGuestData('shift1Guests'),
        shift2Guests: getGuestData('shift2Guests'),
        shift3Guests: getGuestData('shift3Guests')
    };

    localStorage.setItem('frontDeskData', JSON.stringify(data));
    alert('Data saved successfully!');
}

// Load data from localStorage
function loadFromLocalStorage() {
    const savedData = localStorage.getItem('frontDeskData');

    if (!savedData) {
        return;
    }

    try {
        const data = JSON.parse(savedData);

        // Restore basic fields
        if (data.property) document.getElementById('propertySelect').value = data.property;
        if (data.date) document.getElementById('dateInput').value = data.date;
        if (data.agent) document.getElementById('agentName').value = data.agent;
        if (data.shiftTime) document.getElementById('shiftTime').value = data.shiftTime;

        // Restore notes
        if (data.shift1Notes) document.getElementById('shift1Notes').value = data.shift1Notes;
        if (data.shift2Notes) document.getElementById('shift2Notes').value = data.shift2Notes;
        if (data.shift3Notes) document.getElementById('shift3Notes').value = data.shift3Notes;
        if (data.engineeringNotes) document.getElementById('engineeringNotes').value = data.engineeringNotes;
        if (data.residentNotes) document.getElementById('residentNotes').value = data.residentNotes;

        // Restore checklist
        if (data.checklist) {
            const checkboxes = document.querySelectorAll('.checklist-item input[type="checkbox"]');
            data.checklist.forEach((checked, index) => {
                if (checkboxes[index]) {
                    checkboxes[index].checked = checked;
                }
            });
        }

        // Restore packages
        if (data.packages) {
            const packageInputs = document.querySelectorAll('.package-section input[type="number"]');
            data.packages.forEach((value, index) => {
                if (packageInputs[index]) {
                    packageInputs[index].value = value;
                }
            });
            updatePackageTotal();
        }

        // Restore guests
        if (data.shift1Guests) setGuestData('shift1Guests', data.shift1Guests);
        if (data.shift2Guests) setGuestData('shift2Guests', data.shift2Guests);
        if (data.shift3Guests) setGuestData('shift3Guests', data.shift3Guests);

        console.log('Data loaded successfully!');
    } catch (error) {
        console.error('Error loading saved data:', error);
    }
}

// Get guest data from a container
function getGuestData(containerId) {
    const container = document.getElementById(containerId);
    const entries = container.querySelectorAll('.guest-entry');
    const guestData = [];

    entries.forEach(entry => {
        const inputs = entry.querySelectorAll('input, textarea');
        guestData.push({
            name: inputs[0].value,
            apt: inputs[1].value,
            time: inputs[2].value,
            notes: inputs[3].value
        });
    });

    return guestData;
}

// Set guest data to a container
function setGuestData(containerId, guestData) {
    const container = document.getElementById(containerId);
    container.innerHTML = ''; // Clear existing entries

    guestData.forEach(guest => {
        const guestEntry = document.createElement('div');
        guestEntry.className = 'guest-entry';
        guestEntry.innerHTML = `
            <div class="guest-form">
                <input type="text" placeholder="Guest Name (from valid ID)" value="${guest.name}" required>
                <input type="text" placeholder="Apt #" value="${guest.apt}" required>
                <input type="time" value="${guest.time}" required>
                <textarea placeholder="Notes (incidents, special instructions, etc.)" rows="2">${guest.notes}</textarea>
                <button class="btn" onclick="removeGuest(this)">Remove</button>
            </div>
        `;
        container.appendChild(guestEntry);
    });
}

// Update summary section
function updateSummary() {
    const property = document.getElementById('propertySelect').options[document.getElementById('propertySelect').selectedIndex].text;
    const date = document.getElementById('dateInput').value;
    const agent = document.getElementById('agentName').value || 'Not set';

    document.getElementById('summaryProperty').textContent = property;
    document.getElementById('summaryDate').textContent = date || 'Not set';
    document.getElementById('summaryAgent').textContent = agent;

    // Count total guests
    const shift1Count = document.getElementById('shift1Guests').children.length;
    const shift2Count = document.getElementById('shift2Guests').children.length;
    const shift3Count = document.getElementById('shift3Guests').children.length;
    document.getElementById('summaryGuests').textContent = shift1Count + shift2Count + shift3Count;

    // Get total packages
    const totalPackages = document.getElementById('grandTotal').textContent;
    document.getElementById('summaryPackages').textContent = totalPackages;

    // Count checked items
    const checkboxes = document.querySelectorAll('.checklist-item input[type="checkbox"]');
    const checkedCount = Array.from(checkboxes).filter(cb => cb.checked).length;
    document.getElementById('summaryChecklist').textContent = `${checkedCount}/${checkboxes.length}`;
}

// Export to PDF
function exportToPDF() {
    window.print();
}

// Print report
function printReport() {
    window.print();
}

// Clear all data
function clearAll() {
    if (confirm('Are you sure you want to clear all data? This cannot be undone.')) {
        localStorage.removeItem('frontDeskData');
        location.reload();
    }
}

// Auto-save on input changes
document.addEventListener('input', function(e) {
    if (e.target.matches('input, textarea, select')) {
        // Debounce auto-save
        clearTimeout(window.autoSaveTimer);
        window.autoSaveTimer = setTimeout(() => {
            saveToLocalStorage();
        }, 2000);
    }
});

// Auto-save on checkbox changes
document.addEventListener('change', function(e) {
    if (e.target.matches('input[type="checkbox"]')) {
        saveToLocalStorage();
    }
});

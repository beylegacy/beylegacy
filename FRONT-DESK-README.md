# Enhanced Front Desk Management Template

A comprehensive, multi-property daily operations management system for front desk operations. This template provides a beautiful, modern interface for tracking guest check-ins, package audits, daily notes, and shift management across multiple properties.

## Features

### 🏢 Multi-Property Support
- Manage up to 12 different properties from a single interface
- Easy property selection with dropdown menu
- Date and shift time tracking
- Front desk agent name logging

### 👥 Guest Management
- **Three Shift System**: Separate tabs for 1st, 2nd, and 3rd shifts
- Track guest check-ins with:
  - Guest name (from valid ID)
  - Apartment number
  - Check-in time
  - Custom notes for incidents or special instructions
- Dynamically add/remove guest entries
- Auto-save functionality to prevent data loss

### 📦 Package Audit System
- Comprehensive package tracking across all three shifts
- Multiple storage locations:
  - Oversized packages
  - 4 shelf locations
  - 6 bin locations
- Real-time package counting
- Grand total calculation across all shifts
- Visual feedback with hover effects

### ✅ Daily Duties Checklist
- Pre-populated checklist with common front desk tasks:
  - Lobby/hallway/elevator cleaning
  - Coffee area maintenance
  - Resident and vendor assistance
  - Package management
  - Security monitoring
  - Lock box auditing
- Track completion status
- Progress summary in reports

### 📝 Notes & Documentation
- **Shift-Specific Notes**: Each shift has dedicated note sections
- **Engineering/Building Security Notes**: Track maintenance and security issues
- **Resident/Front Desk Notes**: Document resident requests and communications
- Rich text areas with helpful placeholder prompts

### 💾 Data Management
- **Auto-Save**: Automatically saves data to browser's local storage
- **Manual Save**: Save draft button for explicit saves
- **Load Draft**: Restore previously saved data
- **Clear All**: Reset the form with confirmation
- **Export to PDF**: Print-friendly format for reports
- **Print Report**: Direct printing capability

### 📊 Report Summary
- Real-time statistics dashboard showing:
  - Selected property
  - Current date
  - Assigned agent
  - Total guest count across all shifts
  - Total package count
  - Checklist completion percentage

## How to Use

### Getting Started

1. **Open the Template**
   - Simply open `front-desk-management.html` in any modern web browser
   - No installation or server required

2. **Set Up Basic Information**
   - Select your property from the dropdown
   - The date is automatically set to today (can be changed)
   - Enter the front desk agent name
   - Enter the shift time

### Managing Guests

1. **Navigate to the appropriate shift tab** (1st, 2nd, or 3rd Shift)
2. **Fill in guest information**:
   - Guest name (as it appears on valid ID)
   - Apartment number
   - Check-in time
   - Any special notes
3. **Add more guests** by clicking the "+ Add Guest" button
4. **Remove guests** by clicking the "Remove" button (keeps at least one entry)

### Package Audit

1. **Go to the "Package Audit" tab**
2. **Enter package counts** for each location by shift
3. **Watch the total** update automatically
4. Package counts are organized by:
   - 1st Shift (green header)
   - 2nd Shift (orange header)
   - 3rd Shift (purple header)

### Daily Notes

1. **Visit the "Daily Notes" tab**
2. **Check off completed tasks** from the duties checklist
3. **Add engineering/security notes** in the first text area
4. **Add resident/front desk notes** in the second text area

### Exporting Data

1. **Navigate to "Export & Reports" tab**
2. **Review the summary** of all entered data
3. **Choose an export option**:
   - **Export to PDF**: Opens print dialog for PDF saving
   - **Print Report**: Direct printing
   - **Save Draft**: Manually save current progress
   - **Load Draft**: Restore previously saved data
   - **Clear All Data**: Reset the form (with confirmation)

## Features in Detail

### Auto-Save Functionality
- Data is automatically saved to browser's local storage every 2 seconds after changes
- Data persists even if you close the browser
- Automatically loads saved data when reopening the page

### Responsive Design
- Works on desktop, tablet, and mobile devices
- Touch-friendly interface
- Adaptive layouts for different screen sizes

### Visual Feedback
- Smooth animations and transitions
- Hover effects on interactive elements
- Color-coded sections for easy navigation
- Live clock display in the header
- Pulsing status indicator

### Data Validation
- Required fields are marked
- Number inputs prevent negative values
- Time pickers for accurate time entry
- Date picker for easy date selection

## Browser Compatibility

This template works on all modern browsers:
- Chrome/Edge (recommended)
- Firefox
- Safari
- Opera

## Tips & Best Practices

1. **Save Regularly**: While auto-save is enabled, use the manual "Save Draft" button before important actions
2. **Export Daily**: Export or print your reports at the end of each day
3. **Clear Old Data**: Use "Clear All Data" to start fresh each day or shift
4. **Check Summary**: Review the summary section before exporting to ensure all data is entered
5. **Backup Important Data**: Print or PDF export important records for your files

## Technical Details

- **Pure HTML/CSS/JavaScript**: No external dependencies
- **Local Storage**: Uses browser's localStorage API (5-10MB capacity)
- **Print Optimized**: Clean, professional appearance when printed
- **No Server Required**: Runs entirely in the browser
- **Privacy Focused**: All data stays on your device

## Customization

You can customize this template by editing the HTML file:

### Adding More Properties
Find the property selector and add more options:
```html
<option value="property-13">Property 13</option>
```

### Modifying Checklist Items
Add or remove checklist items in the Daily Notes section

### Changing Colors
Modify the CSS gradients and color values in the `<style>` section

### Adding Storage Locations
Add more package sections by duplicating the package-section divs

## Troubleshooting

**Data not saving?**
- Check if cookies/local storage is enabled in your browser
- Try a different browser
- Clear browser cache and reload

**Can't print/export?**
- Ensure pop-ups are not blocked
- Check your printer settings
- Try using "Print to PDF" option in print dialog

**Template looks broken?**
- Make sure you're using a modern browser
- Clear browser cache
- Reload the page

## Support & Feedback

For issues, suggestions, or contributions, please open an issue in the repository.

## License

This template is provided as-is for front desk management purposes.

---

**Version**: 1.0
**Last Updated**: November 2025
**Created By**: BeyLegacy Team

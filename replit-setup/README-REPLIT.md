# 🚀 Front Desk Management - Replit Setup Guide

## Quick Start

### Option 1: Simple One-File Setup (Easiest)

1. **Create a New Repl** on Replit.com
   - Click "Create Repl"
   - Select "HTML, CSS, JS" template
   - Name it "Front-Desk-Management"

2. **Use the Single File**
   - Copy the entire content from `front-desk-management.html` (in the main repository)
   - Paste it into `index.html` in Replit
   - Click "Run" - That's it!

### Option 2: Multi-File Setup (Recommended for Customization)

1. **Create a New Repl** on Replit.com
   - Click "Create Repl"
   - Select "HTML, CSS, JS" template
   - Name it "Front-Desk-Management"

2. **Create Three Files**
   - `index.html` (provided in this folder)
   - `style.css` (provided in this folder)
   - `script.js` (provided in this folder)

3. **Copy the Code**
   - Copy each file's content from this `replit-setup` folder
   - Paste into the corresponding files in Replit

4. **Run Your App**
   - Click the "Run" button
   - Your app will open in a new window or in the preview pane

## File Structure

```
your-repl/
├── index.html    # Main HTML structure
├── style.css     # All styling and animations
└── script.js     # All functionality and logic
```

## Features

✅ Multi-property management (12 properties)
✅ Three shift system (1st, 2nd, 3rd)
✅ Guest check-in tracking
✅ Package audit system
✅ Daily duties checklist
✅ Auto-save functionality
✅ Export to PDF
✅ Mobile responsive

## Usage Instructions

### 1. Basic Setup
- Select your property from the dropdown
- Enter today's date (auto-filled)
- Enter the front desk agent name
- Enter shift time

### 2. Guest Check-ins
- Click on the appropriate shift tab (1st, 2nd, or 3rd)
- Fill in guest information
- Click "+ Add Guest" for multiple guests
- All data auto-saves every 2 seconds

### 3. Package Audit
- Go to "Package Audit" tab
- Enter package counts for each location
- Total updates automatically

### 4. Daily Notes
- Go to "Daily Notes" tab
- Check off completed tasks
- Add engineering/security notes
- Add resident/front desk notes

### 5. Export & Reports
- Go to "Export & Reports" tab
- View summary of all data
- Click "Export to PDF" to save or print

## Replit-Specific Tips

### Making Your Repl Public
1. Click on your Repl name at the top
2. Click "Settings"
3. Under "Privacy", select "Public"
4. Share the URL with your team!

### Keeping Your Repl Always On
1. Go to Replit Deployments
2. Deploy your app for 24/7 availability
3. Or use Replit's "Always On" feature (requires paid plan)

### Accessing from Mobile
- Your Replit URL works on mobile devices
- The app is fully responsive
- Save the URL to your home screen for easy access

### Custom Domain (Optional)
1. Go to your Repl settings
2. Click "Deployments"
3. Add a custom domain if you have one

## Customization

### Adding More Properties
Edit `index.html`, find the property selector section, and add:
```html
<option value="property-13">Property 13</option>
```

### Changing Colors
Edit `style.css` and modify the gradient values:
```css
background: linear-gradient(135deg, #YOUR_COLOR1 0%, #YOUR_COLOR2 100%);
```

### Modifying Checklist
Edit `index.html` in the Daily Notes section to add/remove items.

## Troubleshooting

### App Not Running?
- Make sure all three files are in the root directory
- Check that file names match exactly: `index.html`, `style.css`, `script.js`
- Try clicking "Stop" then "Run" again

### Data Not Saving?
- Replit uses browser localStorage
- Data is saved per browser/device
- Clear your browser cache if experiencing issues

### Preview Not Showing?
- Click the "Open in new tab" button in Replit
- Some features work better in a new tab

### Mobile View Issues?
- Open in a new tab for best mobile experience
- The app is fully responsive on all devices

## Advanced Features

### Auto-Save
- Data saves automatically every 2 seconds
- Manual save option available in Export tab
- Uses browser's localStorage (5-10MB capacity)

### Export Options
- **Export to PDF**: Opens print dialog
- **Print Report**: Direct printing
- **Save Draft**: Manual save
- **Load Draft**: Restore saved data
- **Clear All Data**: Reset form

## Security Notes

- All data is stored locally in the browser
- No server-side storage
- Data doesn't leave the device
- Perfect for privacy-sensitive operations

## Support

### Common Issues

**Q: Can multiple people use this at once?**
A: Yes! Each user's data is saved to their own browser. For shared data, consider using Replit's database feature (requires custom coding).

**Q: Will my data be lost if I close the browser?**
A: No! Data is saved to localStorage and persists across sessions.

**Q: Can I use this offline?**
A: Once loaded, basic functionality works offline. Save/load requires the page to be loaded first.

**Q: How do I share this with my team?**
A: Make your Repl public and share the URL. Each person will have their own data storage.

## Replit Deployment

### Free Deployment
1. Click "Deploy" in Replit
2. Choose "Static" deployment
3. Click "Deploy"
4. Get your public URL

### Custom Deployment
For production use:
1. Use Replit's paid deployment
2. Or download files and host on your own server
3. Or use services like Netlify, Vercel, or GitHub Pages

## Updates & Maintenance

### Backing Up Your Data
1. Use "Export to PDF" regularly
2. Print important records
3. Consider taking screenshots

### Version Control
- Replit has built-in version history
- Click the history icon to see previous versions
- Restore any previous version if needed

## License

This template is provided as-is for front desk management purposes.

---

**Need Help?**
- Check Replit's documentation: https://docs.replit.com
- Visit Replit Ask Community: https://ask.replit.com

**Enjoy your Front Desk Management System! 🎉**

---

*Version: 1.0 for Replit*
*Last Updated: November 2025*

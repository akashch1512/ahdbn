// Object to store click counts
const clickCounts = {
  Instagram: 0,
  LinkedIn: 0,
  YouTube: 0,
  Email: 0,
  WhatsApp: 0,
  X: 0,
  GitHub: 0
};

// Function to track clicks
function trackClick(platform) {
  clickCounts[platform]++;
  console.log(`${platform} clicked ${clickCounts[platform]} times`);
}

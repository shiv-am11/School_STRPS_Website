import fs from 'fs';
import https from 'https';

const downloads = [
  {
    url: 'https://shritularampublicschool.org/wp-content/uploads/2026/09/IMG-20260912-WA0049-576x1024.jpg',
    dest: 'public/images/gallery/gallery-1.jpg'
  },
  {
    url: 'https://shritularampublicschool.org/wp-content/uploads/2026/09/IMG-20260912-WA0080-576x1024.jpg',
    dest: 'public/images/gallery/gallery-3.jpg'
  },
  {
    url: 'https://shritularampublicschool.org/wp-content/uploads/2026/09/IMG-20260912-WA0034-459x1024.jpg',
    dest: 'public/images/gallery/gallery-4.jpg'
  },
  {
    url: 'https://shritularampublicschool.org/wp-content/uploads/2026/09/IMG-20260912-WA0093-1024x486.jpg',
    dest: 'public/images/gallery/gallery-5.jpg'
  },
  {
    url: 'https://shritularampublicschool.org/wp-content/uploads/2026/09/IMG-20260912-WA0022-576x1024.jpg',
    dest: 'public/images/gallery/gallery-7.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1000&auto=format&fit=crop',
    dest: 'public/images/gallery/img16.jpeg'
  },
  {
    url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1000&auto=format&fit=crop',
    dest: 'public/images/infrastructure/library.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1000&auto=format&fit=crop',
    dest: 'public/images/infrastructure/computer-lab.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1000&auto=format&fit=crop',
    dest: 'public/images/infrastructure/activity-room.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1000&auto=format&fit=crop',
    dest: 'public/images/infrastructure/sports-ground.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1000&auto=format&fit=crop',
    dest: 'public/images/infrastructure/school-bus.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1000&auto=format&fit=crop',
    dest: 'public/images/hero/hero-main.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1000&auto=format&fit=crop',
    dest: 'public/images/about/about-students.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=1000&auto=format&fit=crop',
    dest: 'public/images/about/about-collaborative.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?q=80&w=1000&auto=format&fit=crop',
    dest: 'public/images/gallery/assembly.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop',
    dest: 'public/images/gallery/cultural.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1526721940322-10fb6e3ae94a?q=80&w=1000&auto=format&fit=crop',
    dest: 'public/images/gallery/science-fair.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1000&auto=format&fit=crop',
    dest: 'public/images/gallery/yoga.jpg'
  }
];

function downloadFile(url, dest) {
  return new Promise((resolve) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        https.get(res.headers.location, (redRes) => {
          if (redRes.statusCode === 200) {
            redRes.pipe(file);
            file.on('finish', () => {
              file.close();
              console.log('Downloaded redirected:', dest);
              resolve();
            });
          } else {
            console.error('Redir failed:', url, redRes.statusCode);
            resolve();
          }
        });
        return;
      }
      if (res.statusCode === 200) {
        res.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log('Downloaded:', dest);
          resolve();
        });
      } else {
        console.error('Failed:', url, res.statusCode);
        resolve();
      }
    }).on('error', (err) => {
      console.error('Error:', url, err.message);
      resolve();
    });
  });
}

async function run() {
  for (const item of downloads) {
    await downloadFile(item.url, item.dest);
  }
  console.log('All auxiliary downloads complete!');
}

run();

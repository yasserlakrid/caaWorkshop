

const videos = [
  {
    id: 1,
    title: "فقدان الهوية",
    channel: "دروس اونلاين",
    views: 1000,
    uploadedAt: "2 months ago",
    thumbnail: "/src/thumbnails/1.jpg",
    duration: "12:40"
  },
  {
    id: 2,
    title: "متى تشتري الذهب",
    channel: "دروس اونلاين",
    views: 3400,
    uploadedAt: "4 months ago",
    thumbnail: "/src/thumbnails/2.jpg",
    duration: "09:55"
  },
  {
    id: 3,
    title: "لماذا الهنود متميزون",
    channel: "دروس اونلاين",
    views: 21000,
    uploadedAt: "5 months ago",
    thumbnail: "/src/thumbnails/3.jpg",
    duration: "15:02"
  },
  {
     id: 4,
    title:".. أفضل ١٠ فيديوهات في يوتيوب ٢٠٢٥ ",
    channel: "دروس اونلاين",
    views: 120000,
    uploadedAt: "5 months ago",
    thumbnail: "/src/thumbnails/4.jpg",
    duration: "33:02"
  },
  {
     id: 5,
    title:" برنامج مع القرآن (29) | كيف تخرج من رمضان بقلبٍ جديد؟ ",
    channel: "عمر عبد الكافي",
    views: 120000,
    uploadedAt: "5 months ago",
    thumbnail: "/src/thumbnails/5.jpg",
    duration: "14:02"
  },
  {
     id: 6,
    title:"  فلسطين.. حكاية الأرض | الدحيح | ",
    channel:"الدحيح",
    views: 12000,
    uploadedAt: "2 years ago",
    thumbnail: "/src/thumbnails/6.jpg",
    duration: "53:02"
  },
  {
    id: 7,
    title:" Watch this if you know HTML ",
    channel:"Theo - t3․gg",
    views: 100000,
    uploadedAt: "5 years ago",
    thumbnail: "/src/thumbnails/7.jpg",
    duration: "53:02"
  },
  {
    id: 8,
    title:" الدحيح | حرب البسوس ",
    channel:"الدحيح",
    views: 100000,
    uploadedAt: "5 years ago",
    thumbnail: "/src/thumbnails/8.jpg",
    duration: "53:02"
  }

];
const videoGrid = document.querySelector(".mainContent")
videos.forEach((video)=>{
  const card = document.createElement("div")
  card.className = "videoCard"
  card.innerHTML = `
  <div class="thumbnail">
                    <img src="${video.thumbnail}"/>
                </div>
                <div class="title">
                    ${video.title}
                </div>
                <div class="vidInfo">
                    <p>${video.channel}</p>
                    <p>${video.views} views ${video.uploadedAt}</p>
                </div>
            </div>
        `
        videoGrid.appendChild(card)
})
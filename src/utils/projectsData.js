import finalFrontierPreview from '../assets/finalFrontierPreview.webp';
import mythicPreview from '../assets/mythicPreview.webp';
import techAggPreview from '../assets/techAggPreview.webp';
import spotifyCreationPlaylistPreview from '../assets/spotifyCreationPlaylistPreview.webp';
import askLibbiePreview from '../assets/Ask-Libbie-App-preview.webp';
import myReadsPreview from '../assets/Book-Reads-App.webp';
import pixelPreview from '../assets/pixelArtPreview.webp';
// import speedTestPreview from '../assets/typingSpeedTestPreview.png';

export const homePageProjectsCol1 = [
  {
    projectType: 'React',
    projects: [
      {
        projectTag: '⭐ New ⭐',
        projectSubtitle: '',
        projectLink: {
          url: 'https://spotify-playlist-creation.netlify.app/authorize',
          linkTitle: 'Link Spotify Playlist Creation React App',
          img: spotifyCreationPlaylistPreview,
          imgAlt: 'Preview of Spotify Playlist Creation App'
        },
        projectTitle: 'Spotify Creation Playlist App',
        repoLink: 'https://github.com/lourod1987/jammming',
      },
      {
        projectTag: '🔧 Improvements Incoming 🔧',
        projectSubtitle: 'React + Redux',
        projectLink: {
          url: 'https://techagg.netlify.app/',
          linkTitle: 'Link to TechAgg React + Redux App',
          img: techAggPreview,
          imgAlt: 'Preview of TechAgg App'
        },
        projectTitle: 'TechAgg',
        repoLink: 'https://github.com/lourod1987/jammming',
      },
    ],
  }
];

export const homePageProjectsCol2 = [
  {
    projectType: 'JavaScript',
    projects: [
      {
        projectTag: '',
        projectSubtitle: '',
        projectLink: {
          url: 'https://lourod1987.github.io/Final-Frontierv2/',
          linkTitle: 'Link to Final Frontier made with Object Oriented JS',
          img: finalFrontierPreview,
          imgAlt: 'Preview of Final Frontier game'
        },
        projectTitle: 'Final Frontier',
        repoLink: 'https://github.com/lourod1987/Final-Frontierv2',
      },
      {
        projectTag: '',
        projectSubtitle: 'jQuery',
        projectLink: {
          url: 'https://lourod1987.github.io/mythic-concentration/',
          linkTitle: 'Link to Matching Game',
          img: mythicPreview,
          imgAlt: 'Preview of Pixel Art Maker project'
        },
        projectTitle: 'Mythic Matching Game',
        repoLink: 'https://github.com/lourod1987/mythic-concentration',
      },
    ],
  }
];

export const archivePageProjectsCol1 = [
  {
    projectType: 'React',
    projects: [
      {
        projectTag: '',
        projectSubtitle: '',
        projectLink: {
          url: 'https://ask-libbie.netlify.app/',
          linkTitle: 'Link to Ask Libbie React App',
          img: askLibbiePreview,
          imgAlt: 'Preview of Ask Libbie App'
        },
        projectTitle: 'Ask Libbie App',
        repoLink: 'https://github.com/lourod1987/ask-libbie-frontend',
      },
      {
        projectTag: '',
        projectSubtitle: '',
        projectLink: {
          url: 'https://myreadsapp.netlify.app/',
          linkTitle: 'Link to My Reads React App',
          img: myReadsPreview,
          imgAlt: 'Preview of My Reads App'
        },
        projectTitle: 'My Reads App',
        repoLink: 'https://github.com/lourod1987/MyReads',
      },
    ],
  }
];

export const archivePageProjectsCol2 = [
  {
    projectType: 'JavaScript',
    projects: [
      {
        projectTag: '',
        projectSubtitle: '',
        projectLink: {
          url: 'https://lourod1987.github.io/pixelart/',
          linkTitle: 'Link to Pixel Art Project made with jQuery',
          img: pixelPreview,
          imgAlt: 'Preview of Pixel Art Maker project'
        },
        projectTitle: 'Pixel Art Project',
        repoLink: 'https://github.com/lourod1987/pixelart',
      },
    ]
  }
];

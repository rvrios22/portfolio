const projects = [
    {
      title: 'La Quinta Christian Fellowship Church',
      desc: `This church previously used a site provided by a third-party vendor, which included a custom CMS for leadership to manage content. However, the leadership team was not technically proficient, and the site quickly became outdated. As a member of the church, I volunteered to take over. I redesigned the site from the ground up and deployed it on our own VPS. This has eliminated monthly costs and resulted in increased web traffic and new members.`,
      link: 'https://lqcfchurch.org',
      tech: ['React', 'Node.js', 'Express', 'MySQL', 'NGINX']
    },
    {
      title: 'Instrument Tuner',
      desc: `This personal project addresses issues I experienced with existing guitar tuners. The free online tuner provides fast visual feedback and shows how far the user is from the nearest note. It was built using a third-party library that implements the autocorrelation algorithm to determine the frequency of the played note.`,
      link: 'https://tuner-one.vercel.app/',
      tech: ['React', 'TypeScript', 'AudioContext', 'AnalyserNode']
    },
    {
      title: 'Advance Pest Solutions',
      desc: `The business owner needed a website to establish an online presence and assist with vendor verification. The goal was to share his story with prospective clients, educate users on covered pests, and display a list of services. This site is currently under development and will be deployed soon.`,
      link: 'https://github.com/rvrios22/advanced-pest-solutions',
      tech: ['React', 'Tanstack Router']
    },
    {
      title: 'Express Video Streamer',
      desc: `This personal project explores video streaming and building a backend service to serve video content. It was a trial run for future plans to expand La Quinta Christian Fellowship Church's online offerings with self-hosted videos.`,
      link: 'https://github.com/rvrios22/express-video-stream',
      tech: ['React', 'Node.js', 'MySQL']
    }
  ];
  
  export default projects;
  
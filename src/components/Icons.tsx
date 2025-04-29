const iconsStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-around",
  width: '100%',
  position: "sticky",
  padding: '1em',
  top: "0",
  backgroundColor: 'rgb(6, 6, 30)',
  zIndex: 9999
};

function Icons() {
  return (
    <div style={iconsStyle}>
      <a
        href="https://github.com/rvrios22"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="./github.svg" alt="Github" width={40} />
      </a>
      <a
        href="https://www.linkedin.com/in/rafael-v-rios/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="./linkedin.svg" alt="LinkedIn" width={40} />
      </a>
      <a href="mailto:rvrios22@gmail.com">
        <img src="./email.svg" alt="Email" width={40} />
      </a>
    </div>
  );
}

export default Icons;

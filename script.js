document.getElementById("defaultBtn").onclick = () => {
    setOutput("Tombol biasa diklik.");
  };
  
  document.getElementById("submitBtn").onclick = () => {
    setOutput("Tombol submit diklik (meskipun tidak di dalam form).");
  };
  
  document.getElementById("resetBtn").onclick = () => {
    setOutput("Tombol reset diklik (biasanya mengosongkan form).");
  };
  
  document.getElementById("dangerBtn").onclick = () => {
    setOutput("Tombol bahaya diklik! Hati-hati.");
  };
  
  document.getElementById("successBtn").onclick = () => {
    setOutput("Tombol sukses diklik! Aksi berhasil.");
  };
  
  document.getElementById("alertBtn").onclick = () => {
    alert("Ini alert dari tombol!");
  };
  
  function setOutput(text) {
    document.getElementById("output").innerText = text;
  }
  
  
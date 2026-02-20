async function uploadFile() {
  const file = document.getElementById("fileInput").files[0];
  const formData = new FormData();
  formData.append("document", file);

  const response = await fetch("/api/upload", {
    method: "POST",
    body: formData
  });

  const data = await response.json();
  document.getElementById("output").value = data.text;
}
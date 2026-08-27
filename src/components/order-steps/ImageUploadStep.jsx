function ImageUploadStep({ data, onChange }) {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      onChange({ ...data, photoFile: file, photoPreview: reader.result });
    };
    reader.readAsDataURL(file);
  };

  const removePhoto = () => {
    onChange({ ...data, photoFile: null, photoPreview: "" });
  };

  return (
    <div className="order-step">
      <h2>Profile Photo</h2>
      <p className="order-step-subtitle">
        Upload a professional photo for your CV (optional)
      </p>

      {data.photoPreview ? (
        <div className="photo-preview-wrapper">
          <img
            src={data.photoPreview}
            alt="Profile preview"
            className="photo-preview"
          />
          <button
            type="button"
            className="photo-remove-btn"
            onClick={removePhoto}
          >
            <i className="fa-solid fa-trash"></i> Remove Photo
          </button>
        </div>
      ) : (
        <label className="photo-upload-box" htmlFor="photoUpload">
          <i className="fa-solid fa-cloud-arrow-up"></i>
          <span>Click to upload a photo</span>
          <input
            type="file"
            id="photoUpload"
            accept="image/*"
            onChange={handleFileChange}
            hidden
          />
        </label>
      )}
    </div>
  );
}

export default ImageUploadStep;

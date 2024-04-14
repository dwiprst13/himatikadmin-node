import React, { useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import axios from "axios";

function TambahArtikel() {
  const editorRef = useRef(null);
  const fileInputRef = useRef(null);
  const [imagePreview, setImagePreview] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!editorRef.current) {
      console.error("Editor belum siap");
      alert("Editor belum siap, coba lagi");
      return;
    }

    const content = editorRef.current.getContent();

    const formData = new FormData();
    formData.append("judul", event.target.judul.value);
    formData.append("foto", fileInputRef.current.files[0]);
    formData.append("content", content);
    formData.append("tag", event.target.tag.value);
    formData.append("status", event.target.status.value);

    try {
      const response = await axios.post(
        "http://localhost:8081/artikel/tambahartikel",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert("Artikel berhasil ditambahkan!");
      console.log(response.data);
    } catch (error) {
      console.error("Gagal mengupload artikel:", error);
      alert("Gagal menambahkan artikel!");
    }
  };


  return (
    <div className="vh-100 vw-100 text-gray-900 bg-gray-200 min-h-screen">
      <div className="">
        <div className="h-20 p-4 flex">
          <h1 className="text-xl">Tambah Admin</h1>
        </div>
        <div className="px-3 py-4 flex justify-between">
          <div>
            <button className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">
              <a href="/himatikadmin/artikel">Kembali</a>
            </button>
          </div>
        </div>
      </div>
      <form
        className="w-[90%] flex flex-col mx-auto pb-32"
        action=""
        method="POST"
        encType="multipart/form-data"
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <div className="">
          <div className="space-y-6">
            <div className="mx-auto w-[100%]">
              <label
                htmlFor="judul"
                className="block text-sm   font-medium leading-6 "
              >
                Judul
              </label>
              <div className="mt-2">
                <input
                  id="judul"
                  name="judul"
                  type="text"
                  autoComplete="off"
                  placeholder="Judul"
                  required
                  className="p-2 block w-[100%]  rounded-md border-0 py-1.5 text-gray-900 white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="mx-auto w-[100%]">
              <div className="">
                <label
                  htmlFor="foto"
                  className="block text-sm font-medium leading-6"
                >
                  Gambar
                </label>
                <div className="grid grid-cols-12 gap-10">
                  <div className="col-span-4 h-full flex items-center">
                    <input
                      id="foto"
                      name="foto"
                      type="file"
                      autoComplete=""
                      multiple
                      onChange={handleImageChange}
                      ref={fileInputRef}
                      required
                      accept="image/*"
                      className="bg-white block w-[100%] p-5 file:mr-4 file:py-1 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-violet-100 file:cursor-pointer rounded-md border-0 py-1.5 white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  <div className="flex col-span-8 place-items-center mxbg-blue-800 relative bg-gray-500 rounded-lg">
                    <span
                      id="gambarText"
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center"
                    >
                      Pilih Gambar Header Artikel
                    </span>
                    <img
                      src={imagePreview || ""}
                      alt="Preview"
                      className="h-96 w-full object-cover"
                      style={{ display: imagePreview ? "block" : "none" }}
                    />
                    {!imagePreview && (
                      <span className="text-white text-center">
                        Pilih Gambar Header Artikel
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-auto w-[100%]  ">
              <label
                htmlFor="content"
                className="block text-sm font-medium leading-6 "
              >
                Isi
              </label>
              <div className="mt-2">
                <Editor
                  onInit={(evt, editor) => (editorRef.current = editor)}
                  apiKey="92xg6wlqw9faoyfala0uu4ysc1irr953fn9goktkphy4w1ir"
                  initialValue=""
                  init={{
                    plugins:
                      "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount linkchecker",
                    toolbar:
                      "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat",
                  }}
                />
              </div>
            </div>
            <div className="grid grid-cols-8 gap-10">
              <div className="col-span-4">
                <label
                  htmlFor="tag"
                  className="block text-sm font-medium leading-6 "
                >
                  Tag
                </label>
                <input
                  type="text"
                  placeholder="Maksimal 2 tag, pisahkan dengan '#' (#tag1 #tag2)"
                  id="tag"
                  name="tag"
                  className="mt-2 p-2 block w-[100%] rounded-md border-0 py-1.5 text-gray-900 white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div className="col-span-4">
                <label
                  htmlFor="status"
                  className="block text-sm font-medium leading-6 "
                >
                  Status
                </label>
                <select
                  type="text"
                  id="status"
                  name="status"
                  className="p-2 mt-2 block w-[100%] rounded-md border-0 py-1.5 text-gray-900 white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  <option value="publish">Published</option>
                  <option value="unpublish">UnPublished</option>
                </select>
              </div>
            </div>
            <div className="mx-auto w-[100%] ">
              <button
                type="submit"
                name="submit"
                className="flex w-[100%] justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Kirim
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default TambahArtikel;

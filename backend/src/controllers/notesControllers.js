import Note from "../models/Note.js";

export async function getAllNotes(req, res) {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });
    res.status(200).json(notes);
  } catch (error) {
    console.log("Lỗi getAllNotes", error);
    res.status(500).json({ message: "Lỗi server" });
  }
}

export async function getNoteById(req, res) {
  try {
    const note = await Note.findById(req.params.id);
    if (!note)
      return res.status(404).json({ message: "Không tìm thấy ghi chú" });
    res.json(note);
  } catch (error) {
    console.log("Lỗi getNoteById", error);
    res.status(500).json({ message: "Lỗi server" });
  }
}

export async function createNote(req, res) {
  try {
    const { title, content } = req.body;
    const note = new Note({ title, content });

    const saveNote = await note.save();
    res.status(201).json(saveNote);
  } catch (error) {
    console.log("Lỗi createNote", error);
    res.status(500).json({ message: "Lỗi server" });
  }
}

export async function updateNote(req, res) {
  try {
    const { title, content } = req.body;
    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      {
        title,
        content,
      },
      {
        new: true,
      },
    );
    if (!updatedNote)
      return res.status(404).json({ message: "Không tìm thấy ghi chú" });

    res.status(200).json(updatedNote);
  } catch (error) {
    console.log("Lỗi updateNote", error);
    res.status(500).json({ message: "Lỗi server" });
  }
}

export async function deleteNote(req, res) {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);
    if (!deletedNote)
      return res.status(404).json({ message: "Không tìm thấy ghi chú" });

    res.status(200).json({ message: "Ghi chú đã xóa thành công!" });
  } catch (error) {
    console.log("Lỗi deleteNote", error);
    res.status(500).json({ message: "Lỗi server" });
  }
}

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import { useEffect } from "react";
import { IoSend } from "react-icons/io5";

const ChatInput = ({
  value,
  onChange,
  handleSubmit,
}: {
  value: string;
  onChange: (value: string) => void;
  handleSubmit: () => void;
}) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bold: false,
        italic: false,
        strike: false,
        code: false,
      }),
      Placeholder.configure({
        placeholder: "Ask anything about the suppliers...",
      }),
    ],
    immediatelyRender: false,
    content: value,
    editorProps: {
      handleKeyDown: (view, event) => {
        if (event.key === "Enter" && !event.shiftKey) {
          event.preventDefault();
          handleSubmit();
          return true;
        }
        return false;
      },
    },
    onUpdate: ({ editor }) => {
      onChange(editor.getText());
    },
  });

  useEffect(() => {
    if (editor && editor.getText() !== value) {
      editor.commands.setContent(value);
    }
  }, [value, editor]);

  return (
    <div className="py-2 px-5 border border-zinc-500 rounded-[25px] bg-zinc-700 text-white relative min-h-[50px]">
      <EditorContent editor={editor} className="pt-1 pr-6" />
      <button
        type="button"
        className="flex items-center justify-center cursor-pointer absolute right-2 bottom-2 bg-white text-white rounded-full hover:bg-zinc-300 transition duration-200 h-8 w-8"
      >
        <IoSend className="text-black" size={15} />
      </button>
    </div>
  );
};

export default ChatInput;

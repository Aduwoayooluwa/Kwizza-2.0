import React, { useRef } from 'react';
import { Editor as TinyMCEEditor } from '@tinymce/tinymce-react';
import { FaBedPulse } from 'react-icons/fa6';

interface EditorProps {
  apiKey: string;
  initialValue?: string;
  height?: number;
  menubar?: boolean;
  plugins?: string[];
  toolbar?: string;
  contentStyle?: string;
}

const Editor: React.FC<EditorProps> = ({
  apiKey,
  initialValue = "",
  height = 500,
  menubar = false,
  plugins = [
    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
    'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
  ],
  toolbar = 'undo redo | blocks | ' +
    'bold italic forecolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'removeformat | help',
  contentStyle = 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
}) => {
    const editorRef = useRef<any>(null);


  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  return (
    <>
      <TinyMCEEditor
        apiKey={apiKey}
        onInit={(_evt, editor) => editorRef.current = editor}
        initialValue={initialValue}
        init={{
          height,
          menubar,
          plugins,
          toolbar,
          content_style: contentStyle
        }}
      />
      <button onClick={log}>Log editor content</button>
    </>
  );
}

export default Editor;

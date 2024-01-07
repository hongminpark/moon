import { useState } from "react";

//@ts-ignore
const DragDrop = ({ folderInfo, onDrop }) => {
    const [isDragging, setIsDragging] = useState(false);
    const handleDragOver = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragEnter = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = (e: {
        preventDefault: () => void;
        dataTransfer: { files: any };
    }) => {
        setIsDragging(false);
        e.preventDefault();
        for (const file of e.dataTransfer.files) {
            if (file.type === "") {
                const folderPath = file.path;
                const folderName = file.name;
                onDrop(folderName, folderPath);
                break;
            }
        }
    };

    return (
        <div
            className={`border border-dashed p-4 text-center text-xs border-gray-500 font-normal ${
                isDragging ? "bg-black text-white border-white" : ""
            }`}
            onDragOver={handleDragOver}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
        >
            {folderInfo.path || "Drag and drop a folder here"}
        </div>
    );
};

export default DragDrop;

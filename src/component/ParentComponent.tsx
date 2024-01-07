// ParentComponent.jsx or ParentComponent.tsx
import { SetStateAction, useEffect, useState } from "react";
import DragDrop from "./DragDrop";

const ParentComponent = () => {
    const [original, setFolderInfoA] = useState({ name: "", path: "" });
    const [select, setFolderInfoB] = useState({ name: "", path: "" });
    const [resultPath, setResultPath] = useState("Default");

    useEffect(() => {
        if (original.path) {
            setResultPath(`${original.path}/selected`);
        }
    }, [original.path]);

    const handlePathChange = (event: {
        target: { value: SetStateAction<string> };
    }) => {
        setResultPath(event.target.value); // Update state with input value
    };
    const handleDropA = (name: any, path: any) => {
        setFolderInfoA({ name, path });
    };

    const handleDropB = (name: any, path: any) => {
        setFolderInfoB({ name, path });
    };

    const handleButtonClick = async () => {
        try {
            //@ts-ignore
            const targetDirectory = await window.electron.ipcRenderer.invoke(
                "filter-and-copy-files",
                {
                    originalPath: original.path,
                    selectPath: select.path,
                    resultPath,
                }
            );
        } catch (error) {
            console.error("Failed to filter and copy files:", error);
        }
    };

    return (
        <div className="flex flex-col gap-8 text-sm font-medium">
            <div>
                <div className="py-2 ">Original folder</div>
                <DragDrop folderInfo={original} onDrop={handleDropA} />
            </div>
            <div>
                <div className="py-2">Selected folder</div>
                <DragDrop folderInfo={select} onDrop={handleDropB} />
            </div>
            <button
                onClick={handleButtonClick}
                className="w-max border border-black px-4 py-2 hover:bg-gray-900 hover:text-white text-xs"
            >
                RUN
            </button>
            <div>
                <div>Result folder</div>
                <div>
                    <input
                        type="text"
                        value={resultPath}
                        onChange={handlePathChange}
                        className="text-gray-500 py-2 w-full text-xs font-normal focus:outline-none hover:border-b focus:border-b border-gray-400"
                    />
                </div>
            </div>
        </div>
    );
};

export default ParentComponent;

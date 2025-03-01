"use client"
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block z-50" ref={dropdownRef}>
      {/* Button */}
      <button
        className="flex items-center gap-2 border rounded-lg p-2 shadow-md bg-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Image src="/language/italian.png" alt="English" width={32} height={28}/>
        
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute top-full mt-2 left-0 bg-white border rounded-lg shadow-lg">
          <button className="flex items-center gap-2 w-full px-3 py-2 hover:bg-gray-100">
            <a href="../kearatares">
                <Image src="/language/albania.svg" alt="Albania" width={32} height={28}/>
            </a>
          </button>
          <button className="flex items-center gap-2 w-full px-3 py-2 hover:bg-gray-100">
          <a href="../en/kearatares">
            <Image src="/language/english.jpg" alt="German" width={32} height={28}/>
            </a>
          </button>
        </div>
      )}
    </div>
  );
}

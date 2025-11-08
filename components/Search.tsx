import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { DEITIES } from "../constants";
import { ALL_CONTENT } from "../data/content";

interface Suggestion {
  id?: string;
  name?: string;
  title?: string;
  type?: string;
  history?: boolean; // indicates it came from previous searches
}

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [activeIndex, setActiveIndex] = useState(-1);
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  // Load last searches from localStorage
  useEffect(() => {
    const lastSearches = JSON.parse(localStorage.getItem("lastSearches") || "[]");
    const normalized = lastSearches.map((s: string) => ({ title: s, history: true }));
    setSuggestions(normalized);
  }, []);

  const saveToLocalStorage = (search: string) => {
    const lastSearches = JSON.parse(localStorage.getItem("lastSearches") || "[]");
    const updated = [search, ...lastSearches.filter((s: string) => s !== search)].slice(0, 10); // max 10
    localStorage.setItem("lastSearches", JSON.stringify(updated));
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const q = query.trim().toLowerCase();
    if (!q) return;

    // Search deity
    const deity = DEITIES.find(d => d.name.toLowerCase().includes(q));
    if (deity) {
      saveToLocalStorage(deity.name);
      navigate(`/deity/${deity.id}`);
      setQuery("");
      setSuggestions([]);
      return;
    }

    // Search content
    const content = ALL_CONTENT.find(
      c =>
        c.title.toLowerCase().includes(q) ||
        c.type.toLowerCase().includes(q) ||
        (c.deityId && c.deityId.toLowerCase().includes(q))
    );

    if (content) {
      saveToLocalStorage(content.title);
      navigate(`/content/${content.type.toLowerCase()}/${content.id}`);
      setQuery("");
      setSuggestions([]);
      return;
    }

    alert("No results found! Try another name or Chalisa.");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const q = e.target.value;
    setQuery(q);
    const lowerQ = q.toLowerCase();

    if (!lowerQ) {
      const lastSearches = JSON.parse(localStorage.getItem("lastSearches") || "[]");
      setSuggestions(lastSearches.map((s: string) => ({ title: s, history: true })));
      setActiveIndex(-1);
      return;
    }

    const deityMatches = DEITIES.filter(d => d.name.toLowerCase().includes(lowerQ));
    const contentMatches = ALL_CONTENT.filter(
      c =>
        c.title.toLowerCase().includes(lowerQ) ||
        c.type.toLowerCase().includes(lowerQ) ||
        (c.deityId && c.deityId.toLowerCase().includes(lowerQ))
    );

    setSuggestions([...deityMatches, ...contentMatches].slice(0, 10));
    setActiveIndex(-1);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!suggestions.length) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((prev) => (prev + 1) % suggestions.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) => (prev - 1 + suggestions.length) % suggestions.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (activeIndex >= 0) {
        selectSuggestion(suggestions[activeIndex]);
      } else {
        handleSearch(e as any);
      }
    }
  };

  const selectSuggestion = (item: Suggestion) => {
    if ("id" in item && DEITIES.some(d => d.id === item.id)) {
      saveToLocalStorage(item.name!);
      navigate(`/deity/${item.id}`);
    } else if ("id" in item) {
      saveToLocalStorage(item.title!);
      navigate(`/content/${item.type!.toLowerCase()}/${item.id}`);
    } else if (item.history) {
      // search string from history
      setQuery(item.title!);
      inputRef.current?.focus();
    }
    setQuery("");
    setSuggestions([]);
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      <form onSubmit={handleSearch} className="flex">
        <input
          ref={inputRef}
          type="text"
          placeholder="Search deities, chalisas, aartis..."
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          className="w-full px-4 py-2 rounded-l-xl border border-brand-secondary focus:outline-none"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-brand-primary text-white font-semibold rounded-r-xl hover:bg-brand-secondary"
        >
          Search
        </button>
      </form>

      {suggestions.length > 0 && (
        <ul className="absolute z-50 w-full mt-1 rounded-xl shadow-lg overflow-auto max-h-60 bg-brand-bg">
          {suggestions.map((item, index) => {
            const label = "name" in item ? item.name : item.title;
            return (
              <li
                key={index}
                onClick={() => selectSuggestion(item)}
                className={`cursor-pointer px-4 py-2 hover:bg-brand-secondary/30 ${
                  activeIndex === index ? "bg-brand-secondary/20" : ""
                }`}
              >
                {label}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;

import React, { useState, useCallback } from 'react';

// 1. Child Component: SkillList
// Wrapped in React.memo so it only re-renders if its props change.
const SkillList = React.memo(({ skills, deleteSkill }) => {
  // console.log("SkillList rendered"); // Uncomment to test optimization
  
  return (
    <ul>
      {skills.map((skill, idx) => (
        <li
          key={skill}
          id={`skill-number-${idx}`}
          onClick={() => deleteSkill(skill)}
          style={{ cursor: 'pointer', padding: '5px 0' }}
          title="Click to delete"
        >
          {skill}
        </li>
      ))}
    </ul>
  );
});

// 2. Parent Component: UseCallbackComp
const App = () => {
  // Pre-added skills per requirements
  const [skills, setSkills] = useState(["HTML", "CSS", "JavaScript", "React"]);
  const [inputValue, setInputValue] = useState("");

  // Handler to add a new skill
  const handleAddSkill = () => {
    const trimmedInput = inputValue.trim();
    
    // Check for empty string and duplicates before adding
    if (trimmedInput !== "" && !skills.includes(trimmedInput)) {
      setSkills([...skills, trimmedInput]);
      setInputValue(""); // Clear input field
    }
  };

  // Handler to delete a skill
  // useCallback caches this function between renders.
  // By using the functional update form (prevSkills => ...), we don't 
  // need to include 'skills' in the dependency array, making it perfectly stable.
  const handleDeleteSkill = useCallback((skillToDelete) => {
    setSkills((prevSkills) => prevSkills.filter(skill => skill !== skillToDelete));
  }, []);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '400px', margin: '20px' }}>
      <h1 id="heading">My Skills</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <input
          id="skill-input"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter a new skill"
          style={{ padding: '8px', marginRight: '10px' }}
        />
        <button 
          id="skill-add-btn" 
          onClick={handleAddSkill}
          style={{ padding: '8px 16px', cursor: 'pointer' }}
        >
          Add Skill
        </button>
      </div>

      <SkillList skills={skills} deleteSkill={handleDeleteSkill} />
    </div>
  );
};

export default App;
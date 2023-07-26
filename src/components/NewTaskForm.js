import React from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const text = form.text.value;
    const category = form.category.value;

    if (text && category) {
      onTaskFormSubmit({ text, category });
      form.reset();
    }
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" />
      </label>
      <label>
        Category
        <select name="category">
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;


import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCategory, addWidget } from '../features/dashboard/dashboardSlice';

function SideForm({ isOpen, onClose }) {
  const [formType, setFormType] = useState('widget'); // Switch between 'widget' & 'category'
  const [newCategory, setNewCategory] = useState('');
  const [newWidget, setNewWidget] = useState({ name: '', text: '', categoryId: '' });

  const dispatch = useDispatch();
  const categories = useSelector((state) => state.dashboard.categories);

  const handleAddCategory = (e) => {
    e.preventDefault();
    if (newCategory) {
      const newCategoryObject = { id: Date.now().toString(), name: newCategory, widgets: [] };
      dispatch(addCategory(newCategoryObject));
      setNewCategory('');
      onClose();
    }
  };

  const handleAddWidget = (e) => {
    e.preventDefault();
    if (newWidget.name && newWidget.text && newWidget.categoryId) {
      const newWidgetObject = { name: newWidget.name, text: newWidget.text };
      dispatch(addWidget({ categoryId: newWidget.categoryId, widget: newWidgetObject }));
      setNewWidget({ name: '', text: '', categoryId: '' });
      onClose();
    }
  };

  return (
    <div
      className={`fixed top-0 right-0 h-full w-96 bg-white dark:bg-gray-800 shadow-lg transform transition-transform duration-300 z-50 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
    >
      <div className="w-full bg-blue-950 flex justify-between px-4 py-4 items-center">
        <h1 className="bg-blue-950 text-white text-lg">
          {formType === 'widget' ? 'Add Widget' : 'Add Category'}
        </h1>
        <button onClick={onClose} className="text-white text-3xl">&times;</button>
      </div>
      <div className="p-4">
        {formType === 'widget' ? (
          <form className="flex flex-col" onSubmit={handleAddWidget}>
            <select
              className="p-2 border border-gray-300 rounded mb-2"
              value={newWidget.categoryId}
              onChange={(e) => setNewWidget({ ...newWidget, categoryId: e.target.value })}
            >
              <option value="">Choose Category</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
            <input
              className="p-2 border border-gray-300 rounded mb-2 w-full"
              type="text"
              placeholder="Widget Name"
              value={newWidget.name}
              onChange={(e) => setNewWidget({ ...newWidget, name: e.target.value })}
            />
            <textarea
              className="p-2 border border-gray-300 rounded mb-2 w-full"
              placeholder="Widget description"
              value={newWidget.text}
              onChange={(e) => setNewWidget({ ...newWidget, text: e.target.value })}
            />
            <button type="submit" className="bg-blue-500 text-white rounded px-4 py-2">
              Add Widget
            </button>
          </form>
        ) : (
          <form className="flex flex-col" onSubmit={handleAddCategory}>
            <input
              className="p-2 border border-gray-300 rounded mb-2 w-full"
              type="text"
              placeholder="New Category Name"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
            />
            <button type="submit" className="bg-blue-500 text-white rounded px-4 py-2">
              Add Category
            </button>
          </form>
        )}
        <button
          className="mt-4 ml-2 bg-gray-500 text-white px-4 py-2 rounded"
          onClick={() => setFormType(formType === 'widget' ? 'category' : 'widget')}
        >
          {`Switch to ${formType === 'widget' ? 'Add Category' : 'Add Widget'}`}
        </button>
      </div>
    </div>
  );
}

export default SideForm;
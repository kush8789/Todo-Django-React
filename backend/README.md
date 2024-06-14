```{=html}
<h1 align="center">
```
TodoList - Task Management Application with Django REST Framework,
React+Vite and PostgreSQL
```{=html}
</h1>
```
How to Run 🏃‍♀️ Backend (Django, Django REST Framework) Clone the project:

shell Copy code git clone https://github.com/yourusername/todolist.git
Create a virtual environment:

shell Copy code python -m venv venv Activate the environment:

shell Copy code \# On Linux or macOS source venv/bin/activate

# On Windows

.`\venv`{=tex}`\Scripts`{=tex}`\activate`{=tex} Move to the backend
directory:

shell Copy code cd todolist/backend Install dependencies:

shell Copy code pip install -r requirements.txt Apply the migrations:

shell Copy code python manage.py migrate Run the server:

shell Copy code python manage.py runserver Frontend (frontend) Move to
the frontend directory:

shell Copy code cd ../frontend Install dependencies:

shell Copy code npm install Run the development server:

shell Copy code npm run dev

🚀 Project Features A simple task management application using Django
REST Framework and React with the following functionality:

Add new tasks Edit tasks Delete individual tasks Delete all tasks
Display active tasks count Back-end (Django, Django REST Framework)
Applications: TodoApp: For handling all todo-related requests GET
/todos/: Retrieve a list of todos POST /todos/: Create a new todo GET
/todos/`<id>`{=html}/: Retrieve a single todo by ID PATCH
/todos/`<id>`{=html}/: Partially update a todo by ID PUT
/todos/`<id>`{=html}/: Fully update a todo by ID DELETE
/todos/`<id>`{=html}/: Delete a todo by ID Steps to Setup Locally Clone
the project Create a virtual environment: virtualenv venv Activate the
environment: source venv/bin/activate (Linux, macOS) or
.`\venv`{=tex}`\Scripts`{=tex}`\activate `{=tex}(Windows) Move to the
backend directory Install dependencies: pip install -r requirements.txt
Apply the migrations: python manage.py migrate Run the server: python
manage.py runserver Move to the frontend directory Install dependencies:
npm install Run the development server: npm run dev

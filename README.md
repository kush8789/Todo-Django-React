<h1 align="center">
TodoList - Task Management Application with Django REST Framework, React+Vite and PostgreSQL
</h1>

### How to Run 🏃‍♀️

#### Backend (Django, Django REST Framework)

1. **Clone the project**:
    ```shell
    git clone https://github.com/yourusername/todolist.git
    ```

2. **Create a virtual environment**:
    ```shell
    python -m venv venv
    ```

3. **Activate the environment**:
    ```shell
    # On Linux or macOS
    source venv/bin/activate
    
    # On Windows
    .\venv\Scripts\activate
    ```

4. **Move to the backend directory**:
    ```shell
    cd todolist/backend
    ```

5. **Install dependencies**:
    ```shell
    pip install -r requirements.txt
    ```

6. **Apply the migrations**:
    ```shell
    python manage.py migrate
    ```

7. **Run the server**:
    ```shell
    python manage.py runserver
    ```

#### Frontend (React + Vite)

1. **Move to the frontend directory**:
    ```shell
    cd ../frontend
    ```

2. **Install dependencies**:
    ```shell
    npm install
    ```

3. **Run the development server**:
    ```shell
    npm run dev
    ```

### 🚀 Project Features

A simple task management application using Django REST Framework and React with the following functionality:

- Add new tasks
- Edit tasks
- Delete individual tasks
- Delete all tasks
- Display active tasks count

### Back-end (Django, Django REST Framework)

#### Applications:

- **TodoApp**: For handling all todo-related requests
  - `GET /todos/`: Retrieve a list of todos
  - `POST /todos/`: Create a new todo
  - `GET /todos/<id>/`: Retrieve a single todo by ID
  - `PATCH /todos/<id>/`: Partially update a todo by ID
  - `PUT /todos/<id>/`: Fully update a todo by ID
  - `DELETE /todos/<id>/`: Delete a todo by ID

### Steps to Setup Locally

1. Clone the project
2. Create a virtual environment: `virtualenv venv`
3. Activate the environment: `source venv/bin/activate` (Linux, macOS) or `.\venv\Scripts\activate` (Windows)
4. Move to the backend directory
5. Install dependencies: `pip install -r requirements.txt`
6. Apply the migrations: `python manage.py migrate`
7. Run the server: `python manage.py runserver`
8. Move to the frontend directory
9. Install dependencies: `npm install`
10. Run the development server: `npm run dev`

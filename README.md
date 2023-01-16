# ReactDjango_JWT_StarterCode

Starter code for full stack React + Django applications using JWT for authentication/authorization and a fully working register/login system on the React side

## NOTE

"cars" app in Django backend for example purposes only. Study it closely and review provided resources to understand how to properly create protected endpoints that require a JWT token for authorization.

## For implementing user roles

- see comments in the following files in the order they are listed
  - backend/authentication/models.py
  - backend/authentication/serializers.py (note that there are several places needing modification in that file)
- If modifying the User class in authentication/models.py, make sure to drop your existing database,
  create it, and run migrations from scratch
- for a great reference, see the following article: https://simpleisbetterthancomplex.com/tutorial/2018/01/18/how-to-implement-multiple-user-types-with-django.html
  - note that this article is from 2018 and dealing with a full stack Django application scenario with HTML/CSS templates. The principles of setting up the backend portion for User roles is still valid!
- once user roles are set up on your backend, you can now utilize them on the frontend. Recommend reviewing the React Router slideshow for ideas on how to use descendant routes and conditional rendering to control who can access what parts of your application based on a role!

Project out of /200 weighted points  

Presentation out of /50 weighted points  

Entity Relationship Diagram sent to and approved by instructors: /25 weighted points  

Total: /275 points
Capstone User Stories ( /45 points)

(5 points) As an avid mover, I want to have easy access to a library where I can study different forms of exercise.
(2.5 points) As an avid mover, I want to be able to add other forms of exercise to the library.
(2.5 points) As an avid mover, I want to be able to view reference videos in a library.
(5 points) As an avid mover, I want to be able to make a playlist of my favorite videos for a go-to routine.
(5 points) As an avid mover, I want to be able to record my exercise experiences in a journal form.
(7.5 points) As an avid mover, I want to be able to add photos to my entries.
(2.5 points) As an avid mover, I want to be able to filter and search easily through my journal entries.
(5 points) As an avid mover, I want to be able to track my moods and set goals for mental wellness.
(10 points) As a developer, I want to have an aesthetically pleasing and intuitive user interface/user experience (UI/UX) with all features of the application stylized. (CSS, Bootstrap, Material UI, etc.)

Bonus
(7.5 points) As an avid mover, I want to be able to use this app on multiple platforms. (Mobile Responsive)
(7.5 points) As an avid mover, I want to be able to export my journals to an external source, such as a PDF for records.
(7.5 points bonus) As an avid mover, I want to be able to set a monthly journaling goal for myself and track my journal progress.

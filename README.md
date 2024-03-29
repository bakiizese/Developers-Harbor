﻿# Developers Harbor
## Chat System For Programmers

![android-chrome-512x512](https://github.com/bakiizese/Developers-Harbor/assets/24778489/c6be0c70-66bf-478a-969e-b12e7216cfe4)


## Introduction
<p>
Welcome to Developers Harbor, a collaborative chat system designed specifically for programmers to connect, communicate, and support each other in their coding journeys. At Developers Harbor, we believe in fostering a vibrant community where programmers of all levels can come together to share knowledge, collaborate on projects, and participate in exciting programming challenges and tournaments.
</p>

* __Deployed Site__: [Developers Harbor](https://bekii.pythonanywhere.com/login 'main site')
* __Final Project Blog Article__:
* ___Authors___: [O'Brien Abucheri](https://github.com/Abucheri) and [Bereket Zeselassie](https://github.com/bakiizese)

![screenshots](https://github.com/bakiizese/Developers-Harbor/assets/24778489/3cb404ff-ac19-4e05-b629-79853848f64f)


## Installation
To get started with Developers Harbor, follow these steps:

1. Clone the repository: git clone `https://github.com/bakiizese/Developers-Harbor`
2. Navigate to the project directory: `cd Developers-Harbor`
3. Install dependencies: `pip install -r requirements.txt`
4. Set up the database:
	* Create a MySQL database
	* Configure ENV variables for db credentials
	* Run migrations: `flask db upgrade`
5. Start the server with Gunicorn:
	* Ensure that Gunicorn is installed: `pip install gunicorn`
	* Start the server: `gunicorn -w 4 -b 0.0.0.0:8000 wsgi:app`
6. Visit `web_address:8000` in your web browser to access Developers Harbor.

__NB__: Replace `-w 4` with the number of workers you want to run.


## Usage
<p>
Once the server is running, visit `URL:5000` in your web browser to access Developers Harbor. Sign up for an account and start connecting with fellow coders, participating in challenges, and exploring the various features of the platform.</p>

## Contributing
<p>
We welcome contributions from the community! If you'd like to contribute to Developers Harbor, please follow these guidelines:
</p>

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature`.
3. Make your changes and commit them: `git commit -m 'Add new feature'`.
4. Push to the branch: `git push origin feature/your-feature`.
5. Submit a pull request detailing your changes.

## Related Projects
<p>
Check out these related projects:
</p>

* ***Developers Harbor API*** - RESTful API for Developers Harbor (___coming soon___).
* ***Developers Harbor Mobile App*** - Mobile application for accessing Developers Harbor on the go (___coming soon___).

## Licensing
Coming soon
<hr />

 ___Connecting Coders, Navigating the Sea of Code, Building Solutions Together___

 ___#DoHardThings___



___Note___: Developers Harbor is a unique project developed by ambitious developers. All rights reserved.

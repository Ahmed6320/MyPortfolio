<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Ahmed Amatouk | Full Stack .NET Developer</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Google Font -->
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">

    <style>
        :root {
            --bg: #0f172a;
            --card: #111827;
            --accent: #38bdf8;
            --text: #e5e7eb;
            --muted: #94a3b8;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Poppins', sans-serif;
        }

        body {
            background: linear-gradient(135deg, #020617, #0f172a);
            color: var(--text);
        }

        a {
            color: var(--accent);
            text-decoration: none;
        }

        /* ===== Layout ===== */
        .container {
            max-width: 1200px;
            margin: auto;
            padding: 40px 20px;
            display: grid;
            grid-template-columns: 1fr 2fr;
            gap: 40px;
        }

        /* ===== Sidebar ===== */
        .sidebar {
            background: var(--card);
            padding: 30px;
            border-radius: 18px;
            position: sticky;
            top: 20px;
            height: fit-content;
        }

        .avatar {
            width: 100px;
            height: 100px;
            background: linear-gradient(135deg, var(--accent), #0ea5e9);
            border-radius: 50%;
            margin-bottom: 20px;
        }

        .sidebar h1 {
            font-size: 26px;
        }

        .role {
            color: var(--muted);
            margin: 8px 0 20px;
        }

        .links a {
            display: block;
            margin-bottom: 10px;
            font-size: 14px;
        }

        /* ===== Main Content ===== */
        .section {
            background: var(--card);
            padding: 30px;
            border-radius: 18px;
            margin-bottom: 30px;
        }

        .section h2 {
            margin-bottom: 20px;
            font-size: 22px;
            border-left: 4px solid var(--accent);
            padding-left: 10px;
        }

        /* ===== About ===== */
        .about p {
            line-height: 1.7;
            color: var(--muted);
        }

        /* ===== Skills ===== */
        .skills {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
            gap: 15px;
        }

        .skill {
            background: #020617;
            padding: 12px 15px;
            border-radius: 10px;
            font-size: 14px;
        }

        /* ===== Timeline ===== */
        .timeline {
            border-left: 2px solid var(--accent);
            padding-left: 20px;
        }

        .item {
            margin-bottom: 20px;
        }

        .item h3 {
            font-size: 16px;
        }

        .item span {
            font-size: 13px;
            color: var(--muted);
        }

        /* ===== Footer ===== */
        footer {
            text-align: center;
            padding: 30px;
            color: var(--muted);
        }

        /* ===== Responsive ===== */
        @media (max-width: 900px) {
            .container {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>

<div class="container">

    <!-- Sidebar -->
    <aside class="sidebar">
        <div class="avatar"></div>
        <h1>Ahmed Amatouk</h1>
        <p class="role">Full Stack .NET Developer</p>

        <div class="links">
            <a href="https://www.linkedin.com/in/ahmed-amatouk" target="_blank">LinkedIn</a>
            <a href="#">GitHub</a>
            <a href="mailto:ahmed@email.com">Email</a>
        </div>
    </aside>

    <!-- Main -->
    <main>

        <!-- About -->
        <section class="section about">
            <h2>About Me</h2>
            <p>
                Computer Science student at the Faculty of Computers and Artificial Intelligence,
                Cairo University. I specialize in Frontend Development using React and currently
                working as a Full Stack .NET Developer. Passionate about building scalable,
                high-quality web applications and continuously improving my engineering skills.
            </p>
        </section>

        <!-- Skills -->
        <section class="section">
            <h2>Tech Stack</h2>
            <div class="skills">
                <div class="skill">HTML5 / CSS3 / JavaScript</div>
                <div class="skill">React.js</div>
                <div class="skill">C# & .NET Core</div>
                <div class="skill">SQL Server</div>
                <div class="skill">REST APIs</div>
                <div class="skill">Git & GitHub</div>
            </div>
        </section>

        <!-- Education -->
        <section class="section">
            <h2>Education</h2>
            <div class="timeline">
                <div class="item">
                    <h3>B.Sc. in Computer & Artificial Intelligence</h3>
                    <span>Cairo University — 2023 → 2027</span>
                </div>
            </div>
        </section>

        <!-- Career -->
        <section class="section">
            <h2>Career Goal</h2>
            <p class="about">
                Seeking opportunities as a Full Stack or Frontend Developer where I can contribute
                to real-world projects, grow as a software engineer, and work with modern
                technologies.
            </p>
        </section>

    </main>
</div>

<footer>
    © 2025 Ahmed Amatouk — Built with passion
</footer>

</body>
</html>

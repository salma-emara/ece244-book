# ece244-book

This is a repository for developing the first online textbook of its kind for ECE244: Programming Fundamentals. The book's name is Khufu: Object-Oriented Programming using C++. It is developed using Jupyter Book.

You will find the book at [learningcpp.org](https://learningcpp.org), or [learningcpp.netlify.app](https://learningcpp.netlify.app/)

## Getting Started

If you are trying to build the book locally, you can follow the instructions below.

1- Clone this GitHub repo. In your terminal, type the following command:

```
git clone https://github.com/salma-emara/ece244-book/
cd ece244-book
```

2- Install jupyter-book by running the following command in the terminal

```
pip install -r requirements.txt
```

3- To build the book locally, run the following command:

```
# To build everything for the first time 
node ./textbook/_static/toml_to_js_convertor.js
jupyter-book build --all textbook
cp -r textbook/exercises/ textbook/_build/html/exercises
cp -r embeddings/outputs textbook/_build/html

# To build everything
jupyter-book build --all textbook
# To build after updating a markdown file
jupyter-book build textbook

# To build after updating exercises
node ./textbook/_static/toml_to_js_convertor.js
jupyter-book build --all textbook
cp -r textbook/exercises/ textbook/_build/html/exercises
```

4- To view the book, you have two options:

1. **Open directly**:
   ```bash
   open textbook/_build/html/index.html
   ```
   **Note**: Opening the book this way uses the `file:///` protocol, which may cause issues with functionalities like search or semantic search due to CORS policies.

2. **Run a local server** (recommended for full functionality):
   ```bash
   cd textbook/_build/html
   python -m http.server 8000
   open http://localhost:8000
   ```
   This method ensures all functionalities, including search and semantic search, work correctly.

5- To update text embeddings for Semantic Search after a change, follow these steps:

1. Ensure you have installed the necessary packages as described in the `embeddings/README.md` file. Or run the following command 
   ```bash
   pip install sentence-transformers beautifulsoup4 numpy
   ```
2. Run the following commands:
   ```bash
   python embeddings/generate.py
   cp -r embeddings/outputs textbook/_build/html
   ```

### Extra: to solve no title issue for semantic-search page
1. Run the following command when deploying on Netlify:
   ```bash
   cp -r textbook/semantic-search.html textbook/_build/html
   ```
2. Whenever a change that could affect table of content or semantic-search page
   1. Run the following command after jupyter-book build to update locally stored semantic-search.html
      ```bash
      cp -r textbook/_build/html/semantic-search.html textbook
      ```
   2. Run the following command or open directly the local semantic-search.html in VSCode edit mode
      ```bash
      code textbook/semantic-search.html
      ```
   3. Make changes in the local semantic-search.html
      1. Use ctrl + F or cmd + F and search for title
      2. change  
         ```<title>&lt;no title&gt; &#8212; Snefru: Learning Programming with C</title>```  
         to below:  
         ```<title>Semantic Search &#8212; Snefru: Learning Programming with C</title>```
   4. Run the following command again to update the changes in _build when deploying on Netlify
      ```bash
      cp -r textbook/semantic-search.html textbook/_build/html
      ```
### For Visualizing C++ Code

Run this command if you are using cpp-visualizer in any of the markdown files


```
jupyter-book build --all textbook
```

```
cd textbook
python viztrace_cpp_folder.py chapters
```

```
cd ..
cp -r textbook/trace textbook/_build/html
```


```
cd textbook/_build/html
python -m http.server 8000
open http://localhost:8000
```

### Check spelling mistakes

To check spelling mistakes, you need to install `pyspelling` using the following command:

```
pip install pyspelling
```

Then run the following command:

```
cd spell-check/
pyspelling -c spell-check.yml
```

The spell-check will ignore text between code blocks or in-line code. 

## Contributing

This book is written in MyST-Markdown, which is easy to learn. I ask you to be consistent with the rest of the book if you will make substantial changes. If you want to add advanced features, you may seek help from [Jupyter Book](https://jupyterbook.org/en/stable/intro.html) website.

If you are using VS Code, install MyST-Markdown extension to allow syntax highlighting for `.md` files.

When you add a new `.md` file, remember to include it in `textbook/_toc.yml`.


### Exercises: Add or Edit

The exercises for the book are created in TOML files, which are then converted into JavaScript files to be read by the code to build the book.

**To convert .toml files to .js files:**

1- Ensure you have Node.js installed on your system. You can download it from their official website (https://nodejs.org).

2- Download the required package by executing the following command:

```
npm install @iarna/toml
```

**To add a new exercise page:**

1- Create a new .toml file containing the exericses in textbook/exercises in the chapter folder of your choice.

2- In your terminal, execute the following command in `ece244-book` directory.

```
node ./textbook/_static/toml_to_js_convertor.js
```
A .js file will be created in the corresponding folders for all the .toml files present in the textbook/exercises directory.

3- Open the .md file where you want the exercises to be and add the following line. Replace `file-name` with the name of your exercise file (without .js extension). 

```
{{exercise_embed | replace("%%FILENAME%%", "file-name") }}
```

**To edit an existing exercise page:**

1- Open the .toml file of the exercise you want to edit and make the desired changes.

2- Run the question ID patcher to ensure all exercises have unique IDs:

``` 
node ./textbook/_static/add_question_ids.js
```

3- In your terminal, go to `ece244-book` directory and execute the following command.

```
node ./textbook/_static/toml_to_js_convertor.js
```

**To validate all exercise files**

1- In your terminal, go to `ece244-book` directory and execute the following command.

```
node textbook/exercises/toml-parser.js
```

2- If any file contains errors, only the first error in that file will be reported. Fix the issue in the file, then rerun the command to see the next error.

```
node textbook/exercises/toml-parser.js
```
3- If no errors occur, an "All done." message will be shown in the terminal.

Build the book locally and ensure the exercises are behaving as expected.


### Correcting mistakes 

Since this book is still under development, it will have mistakes. If you find a typographical, grammatical or any other mistake, I would highly appreciate if you open an issue pointing out the mistake. You may also correct it and create a pull request. 

If you do not have a GitHub account, you may send the primary author an email at `salma@ece.utoronto.ca`.

Thank you in advance!

## Automatic Deployment

For anyone with a write request to main branch, with every push Netlify will automatically deploy the book to [learningcpp.org](learningcpp.org). This is done following instructions on [Netlify for Jupyter-Book](https://jupyterbook.org/en/stable/publish/netlify.html).

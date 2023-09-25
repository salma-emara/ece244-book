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
# To build everything
jupyter-book build --all textbook
# To build after updating a markdown file
jupyter-book build textbook
```

4- To view the book, you can run:

```open textbook/_build/html/index.html```

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

## Correcting mistakes 

Since this book is still under development, it will have mistakes. If you find a typographical, grammatical or any other mistake, I would highly appreciate if you open an issue pointing out the mistake. You may also correct it and create a pull request. 

If you do not have a GitHub account, you may send the primary author an email at `salma@ece.utoronto.ca`.

Thank you in advance!

## Automatic Deployment

For anyone with a write request to main branch, with every push Netlify will automatically deploy the book to [learningcpp.org](learningcpp.org). This is done following instructions on [Netlify for Jupyter-Book](https://jupyterbook.org/en/stable/publish/netlify.html).
# Git Basics - A Complete Learning Guide

## 1. What is Git?

Git is a **version control system** that tracks changes to your code over time. It allows you to:
- Save snapshots of your code (commits)
- Work on multiple versions simultaneously (branches)
- Collaborate with others
- Go back to previous versions if needed

## 2. Core Concepts

### Repository (Repo)
Your project folder that contains all files and the full history of changes. Git stores this info in a hidden `.git` folder.

### Commit
A snapshot of your code at a specific point in time. Think of it as a save point with:
- Changes made
- Author name
- Timestamp
- Commit message (description)

### Branch
An independent line of development. Default branch is usually `main` or `master`.
- Branches let you work on features without affecting the main code
- You can switch between branches

### Remote
A version of your repository hosted on a server (like GitHub). Usually called `origin`.

## 3. Essential Commands

### Setup
```bash
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
```

### Creating & Cloning
```bash
git init                              # Create a new git repo in current folder
git clone <url>                       # Copy a remote repo to your computer
```

### Checking Status
```bash
git status                            # See what changed
git log                               # View commit history
git log --oneline                     # Shorter version
git log --oneline -10                 # Last 10 commits
git diff                              # See exact changes (not staged)
git diff --staged                     # See changes ready to commit
```

### Staging & Committing
```bash
git add <filename>                    # Stage specific file
git add .                             # Stage all changes
git commit -m "Your message"          # Create a commit
git commit -am "Your message"         # Stage + commit tracked files
```

### Branches
```bash
git branch                            # List local branches
git branch -a                         # List all branches (local + remote)
git branch <new-branch-name>          # Create new branch
git checkout <branch-name>            # Switch to a branch
git checkout -b <branch-name>         # Create AND switch to new branch
git switch <branch-name>              # Modern way to switch (git 2.23+)
git merge <branch-name>               # Merge another branch into current
```

### Remote Operations
```bash
git remote -v                         # See remote repositories
git fetch origin                      # Download updates from remote
git pull origin <branch-name>         # Fetch + merge in one command
git push origin <branch-name>         # Upload commits to remote
git push -u origin <branch-name>      # Upload & set upstream (first time)
```

## 4. Workflow Example

### Scenario: Adding a new feature

```bash
# 1. Start from main branch
git checkout main
git pull origin main

# 2. Create a feature branch
git checkout -b feature/dark-mode

# 3. Make changes to files (your editor)
# ... edit files ...

# 4. Check what changed
git status
git diff

# 5. Stage your changes
git add .

# 6. Create a commit
git commit -m "Add dark mode toggle"

# 7. Push to remote
git push -u origin feature/dark-mode

# 8. Create a Pull Request on GitHub

# 9. When approved, merge
git checkout main
git pull origin main
git merge feature/dark-mode
git push origin main
```

## 5. Understanding the Three Areas

Git has three areas where your code exists:

```
Working Directory → Staging Area → Repository (commits)
    (your files)    (git add)      (git commit)
```

**Working Directory**: Your actual files on disk. Changes here are "untracked" or "unstaged".

**Staging Area**: Changes you've marked with `git add`. Ready to be committed.

**Repository**: Committed changes. The permanent history.

## 6. Common Scenarios

### I made changes but haven't committed yet
```bash
git status                # See what's changed
git diff                  # View the exact changes
git add <file>            # Stage the changes
git commit -m "message"   # Commit
```

### I committed but want to undo the last commit
```bash
git reset HEAD~1          # Undo commit, keep changes in working directory
git reset --hard HEAD~1   # Undo commit, throw away changes (careful!)
```

### I'm on wrong branch
```bash
git stash                 # Save current changes temporarily
git checkout <right-branch>
git stash pop             # Apply the changes
```

### I want to see what changed in a specific commit
```bash
git show <commit-hash>    # Show that commit's changes
git log -p                # Show all commits with their changes
```

### Synchronize with remote
```bash
git fetch origin          # Download latest from remote
git rebase origin/main    # Apply your changes on top of latest main
# or
git merge origin/main     # Merge remote changes into your branch
```

## 7. Best Practices

✅ **DO:**
- Commit often with clear, descriptive messages
- Create feature branches for new work
- Pull before starting work (`git pull`)
- Push your work regularly
- Use meaningful commit messages (describe the "why", not just "what")

❌ **DON'T:**
- Commit directly to main without review
- Use `git push --force` unless you really know why
- Make giant commits with 100 changes
- Commit without clear messages
- Mix unrelated changes in one commit

## 8. Example Commit Messages

```
❌ Bad:
- "fix"
- "changes"
- "update"

✅ Good:
- "Fix navigation menu overflow on mobile"
- "Add user authentication with JWT tokens"
- "Refactor database connection pooling"
- "Update dependencies to latest versions"
```

## 9. Useful Aliases (Optional)

Add to your git config to create shortcuts:

```bash
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.st status
git config --global alias.unstage 'restore --staged'
git config --global alias.last 'log -1 HEAD'
git config --global alias.visual 'log --graph --oneline --all'
```

Then you can use: `git co main`, `git st`, etc.

## 10. Recap: Daily Workflow

```bash
# Morning: Get latest
git pull origin main

# Work: Create feature branch
git checkout -b feature/my-feature

# During day: Commit often
git add .
git commit -m "Small meaningful description"

# When done: Push
git push -u origin feature/my-feature

# Then: Create Pull Request on GitHub for review
```

---

**Ready to practice?** Try these commands in your terminal!

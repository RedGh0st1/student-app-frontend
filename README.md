#### TODOS 2023-07-19

Style the student list
Handle loading state
Handle error state
Refractor with a layout component

#### TODOS

Create a frontend React repo for our project

Connect the repo to our backend server

Fetch a list of students and display it

Break the list of students into React components

Style list

#### QUESTIONS

Backend

What is middleware and when is it used?

what exactly does cors do?

Frontend

What tools will we use to build the frontend?

When does useEffect fire or not fire? What does an empty dependency array do?

Can you further explain the difference or benefits of using scss instead of css?

1. If you want your React component to dispaly something diferent, what do you need to do?
2. what are 3 things that cause a component to rerender?
3. when does the useffect()callback fire?
4. when is the useEffect() callback guaranteed to fire?

#### THINGS TO DISCUSS

What causes a React component to rerender?
if you want to see something different, the componenet must re-render

    1. The component's parent renders again

    2. The component's props change

    3. The component's state changes
    (4. Conext changes)

    What are the benefits of scss over css?

# ## Goals 8/06/23

1. Filter list by input
2. Hanlde no results situation
3. Input styling and any other styling

# Steps

1. X Create e,pty `<Container /> component John `
2. X Render `<Conainter /> with children Samnatha`
3. X Move exitisng position css from `<StudentList /> and <Loading /> inot <Container /> Juhao`

Lifting state up: preview

##Goals

1. fix the bug where we forget a cards expaneded state
2. Build Expand All/ Collapse All buttons

## Steps to reproduce bug

1. Expand Ingaberg's grades
2. Search for "cl"
3. Ingaberg caed is removed from results
4. Delete search term so that Ingaberg is shown in results.
5. **Expected** Ingaberg card is still expanded
6. **Actual** Ingaberg's card is collapsed

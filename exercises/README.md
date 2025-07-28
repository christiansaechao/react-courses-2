# 🟢 Beginner Exercises (Basics, JSX, Components)

`Basic Jsx Components`
    Greeting Component
    Create a Greeting component that accepts a name as a prop and displays Hello, [name]!.

    Static Profile Card
    Build a card that displays a user’s name, profile picture, and a short bio using JSX and CSS.

`Basic Components w/ useState`
    Counter App
    Create a counter with + and – buttons using useState.

    Toggle Button
    Make a button that toggles between “ON” and “OFF” each time it’s clicked.

    Show/Hide Text
    Button toggles visibility of a paragraph.

    Simple Form Input
    Input box that updates and displays the typed value in real-time.

`Mapping over lists practice`
    List Rendering
    Render a list of strings (e.g. fruit, colors, etc) using .map()

    List Rendering Part 2
    Render a list of users display: Firstname, Lastname, Profile Picture, Bio.
    Each person should have their own personal card.
    const users = [
        {
            firstName: "Jocelin",
            lastName: "Nguyen",
            profilePicture: "https://randomuser.me/api/portraits/women/44.jpg",
            bio: "Frontend developer passionate about design systems and coffee.",
        },
        {
            firstName: "Elias",
            lastName: "Martinez",
            profilePicture: "https://randomuser.me/api/portraits/men/33.jpg",
            bio: "Full-stack engineer and part-time drummer. Loves building side projects.",
        },
        {
            firstName: "Ava",
            lastName: "Choudhury",
            profilePicture: "https://randomuser.me/api/portraits/women/65.jpg",
            bio: "UI/UX designer focused on creating accessible user experiences.",
        },
        {
            firstName: "Noah",
            lastName: "Peterson",
            profilePicture: "https://randomuser.me/api/portraits/men/29.jpg",
            bio: "Backend developer who enjoys optimizing APIs and weightlifting.",
        },
        {
            firstName: "Lina",
            lastName: "Okafor",
            profilePicture: "https://randomuser.me/api/portraits/women/72.jpg",
            bio: "Tech writer and content creator. Loves documenting complex systems.",
        },
    ];

`Small beginner friendly projects`
    Dice Roller
    Simulate rolling a dice by generating a random number between 1 and 6.

    Simple Calculator
    Two number inputs and a dropdown to add/subtract/multiply/divide.

    Temperature Converter
    Convert between Celsius and Fahrenheit, with synchronized inputs.

# 🟡 Intermediate Exercises (Events, Forms, State, Conditional Rendering)

    Todo List
    Add todos, mark them done, and delete them.

    Filter List (.filter()) -> filter method 
    Filter a list of names by text input.

    Dark Mode Toggle (conditional rendering, state, event handlers)
    Toggle a light/dark theme using conditional className and state.

    Like Button (conditional rendering, state, event handlers)
    Click to toggle like status and count.

    Tabs Component
    Create a simple tab switcher that shows different content for each tab.

# 🔵 Advanced Practice (Hooks, Component Composition, Data Flow)

    Stopwatch/Timer
    Start, stop, and reset a timer using useState and setInterval, clearInterval

    Advanced Theme Toggle
    Toggle between light and dark themes using useEffect and localStorage

    The first page load
        useEffect(() => {

        }, []);

    Lift State Up
    Create multiple input components that update a parent component’s shared state.

    Multi-step Form
    Build a login form and validate fields before submission (e.g., required fields, email format).
    and the form should save data between steps and displays a summary at the end.

    Custom Hooks
    Implement custom hooks for reusable logic, do one of them:
    * useFetch
    * useLocalStorage
    * useToggle
    * useDebounce

    WebSockets? 

https://dev.to/arafat4693/15-useful-react-custom-hooks-that-you-can-use-in-any-project-2ll8

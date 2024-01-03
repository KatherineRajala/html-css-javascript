class Activity
{
    constructor(activityName, duration, excitement, location, description) {
        this.activityName = activityName;
        this.duration = duration;
        this.excitement = excitement;
        this.location = location;
        this.description = description;
    }
}

const activities = [];

function addActivity(activityName, duration, excitement, location, description) {
    if (!activityName || !duration || !excitement || !location || !description) {
        console.log("Please provide valid input for all fields");
        return;
    }
    if (activityExists(activityName)) {
        console.log("An activity with that name already exists. Please choose a different name!");
        return;
    }

    const activity = new Activity(activityName, parseFloat(duration), parseInt(excitement), location, description);
    activities.push(activity);
    console.log("Activity added successfully!");
}

function editActivity(activityName, duration, excitement, location, description) {
    const indexActivity = activities.findIndex((activity) => activity.name === activityName);

    if (indexActivity !== -1) {
        if (duration !== "") {
            activities[index].duration = duration;
        }
        else if (excitement !== "") {
            activities[index]. excitement = excitement;
        }
        else if (location !== "") {
            activities[index].location = location;
        }
        else if (description !== "") {
            activities[index].description = description;
        }
        
        console.log("Acitivity edited successfully!");
    }
    else {
        console.log("Activity not found.");
    }
}

function deleteActivity(activityName) {
    const indexActivity = activities.findIndex((activity) => activity.name === activityName);

    if (indexActivity !== -1) {
        activities.splice(indexActivity, 1);

        console.log("Activity deleted successfully!");
    }
    else {
        console.log("Activity not found.");
    }
}

function activityExists(activityName) {
    return activities.find((activity) => activity.name === activityName);
}

function listActivities() {
    console.log("\nList of Personalized Fun Activities:");
    activities.forEach((activity, index) => {
        console.log(`\n${index + 1}. Activity: ${activity.name}`);
        console.log(`   - Duration: ${activity.duration} hours`);
        console.log(`   - Excitement Level: ${activity.excitement}/10`);
        console.log(`   - Location: ${activity.location}`);
        console.log(`   - Description: ${activity.description}`);
    });
}

function getNewActivityDetails() {
    const name = prompt("What is the name of the activity? ");
    const duration = prompt("How long is the duration (hours)? ");
    const excitement = prompt("How excited are you (1-10)? ");
    const location = prompt("What is the location? ");
    const description = prompt("Give a short description of the activity: ");

    addActivity(name, duration, excitement, location, description);
}

function getEditActivityDetails() {
    const name = prompt("Enter activity name to edit: ");
    console.log("If you don't want to make an edit on a point, then just press enter.");
    const newDuration = prompt("Enter new duration in hours: ");
    const newExcitement = prompt("Enter new excitement level (1-10): ");
    const newLocation = prompt("Enter new location: ");
    const newDescription = prompt("Enter new description: ");

    editActivity(name, newDuration, newExcitement, newLocation, newDescription);
}

function getDeleteActivityName() {
    const name = prompt("What activity do you wish to delete? ");
    deleteActivity(name);
}

function consoleUserInterface() {
    while (true) {
        console.log("\nChoose an option:");
        console.log("1. Add Activity    2. Edit Activity    3. Delete Activity  4. List Activities  5. Exit");

        const choice = prompt("Enter option here: ");

        switch (choice.trim()) {
            case "1":
                getNewActivityDetails();
            case "2":
                getEditActivityDetails();
            case "3":
                getDeleteActivityName();
            case "4":
                listActivities();
            case "5":
                console.log("Exiting program...");
                return;
            default:
                console.log("Invalid choice. Please choose a valid option.");
        }
    }
}

consoleUserInterface();

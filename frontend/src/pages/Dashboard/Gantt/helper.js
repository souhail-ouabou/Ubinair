export function initTasks() {
    const currentDate = new Date();
    const tasks = [
      {
        start: new Date("2022-06-20T18:42:02.483+00:00"),
        end: new Date("2022-06-27T18:42:02.483+00:00"),
        name: "Some Project",
        id: "ProjectSample",
         progress: 50,
        type: "project",
        
      //  hideChildren: false
      },
      {
        start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
        end: new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          2, //nhar
          12, //sa3a
          28 //minute
        ),
        name: "Idea",
        id: "Task 0",
        progress: 45,
        type: "task",
        project: "ProjectSample"
      },
      {
        start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 2),
        end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 4, 0, 0),
        name: "Research",
        id: "Task 1",
        progress: 25,
        type: "task",
        project: "ProjectSample"
      },
      {
        start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 4),
        end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8, 0, 0),
        name: "Discussion with team",
        id: "Task 2",
        progress: 10,
        type: "task",
        project: "ProjectSample"
      },

    ];
    return tasks;
  }
  export function getStartEndDateForProject(tasks, projectId) {
    const projectTasks = tasks.filter((t) => t.project === projectId);
    let start = projectTasks[0].start;
    let end = projectTasks[0].end;
    for (let i = 0; i < projectTasks.length; i++) {
      const task = projectTasks[i];
      if (start.getTime() > task.start.getTime()) {
        start = task.start;
      }
      if (end.getTime() < task.end.getTime()) {
        end = task.end;
      }
    }
    return [start, end];
  }
  
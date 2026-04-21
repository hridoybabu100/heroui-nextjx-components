
import { Addtask } from "@/components/Modal/Addtask";
import TasksCard from "@/components/tasksCard/TasksCard";
import { createAdtask } from "@/lib/action";
import { gettasks } from "@/lib/tasks";

const taskspage = async () => {
  const tasks = await gettasks();


  return (
    <div className="">
      <h2 className="text-4xl py-10 font-bold text-white">
        All tasks : {tasks.length}
      </h2>

      <Addtask createTask = {createAdtask}></Addtask>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-10">
        {
          tasks.map((task) =>  <TasksCard key={task.id} task={task}></TasksCard>)
        }
      </div>
    </div>
  );
};

export default taskspage;

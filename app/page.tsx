"use client";
import React, { useEffect } from "react";

import { ITask } from "@/types";
import Header from "@/components/Header";
import AddTask from "@/components/AddTask";
import { BarLoader } from "react-spinners";
import { useState } from "react";
import { Card } from "@/components/ui/card";

export default function Home() {
  const [task, setTask] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [allTasks, setAllTasks] = useState([]);

  const handleCreateTask = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/task/new", {
        method: "POST",
        body: JSON.stringify({
          task: task,
        }),
      });
      if (response.ok) {
        setTask("");
        fetchTask();
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  const fetchTask = async () => {
    try {
      const response = await fetch("/api/task/all");
      const data = await response.json();
      setAllTasks(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTask();
  }, []);

  return (
    <>
      <Header />
      <AddTask
        task={task}
        setTask={setTask}
        handleCreateTask={handleCreateTask}
      />
      {isLoading ? (
        <BarLoader />
      ) : (
        <div className="flex flex-wrap justify-center gap-5 pt-10 max-w-3xl mx-auto">
          {allTasks.length > 0 ? (
            allTasks.map((individualTask: ITask) => (
              <Card className="flex justify-center items-center w-64 h-20 flex-grow text-pink-500 border-pink-200 bg-pink-100">
                {individualTask.task}
              </Card>
            ))
          ) : (
            <p>No Task</p>
          )}
        </div>
      )}
    </>
  );
}

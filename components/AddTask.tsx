import React from "react";
import { AddTaskProps } from "@/types";
import { Input } from "./ui/input";
import { CirclePlus } from "lucide-react";
import { Button } from "./ui/button";

const AddTask = ({ task, setTask, handleCreateTask }: AddTaskProps) => {
  return (
    <div className="flex w-full justify-center items-center pt-10">
      <div className="flex space-x-4">
        <Input
          className="flex bg-pink-200 w-96"
          placeholder="Ajouter une tache"
        />
        <Button className="bg-pink-400">
          <CirclePlus className="flex items-stretch" />
        </Button>
      </div>
    </div>
  );
};

export default AddTask;

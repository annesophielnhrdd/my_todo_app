import React from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const NoTask = () => {
  return (
    <Alert className="flex justify-center items-center border-pink-400">
      <AlertDescription className=" text-pink-500">
        Il n'y a pas de tâche à afficher pour le moment.{" "}
      </AlertDescription>
    </Alert>
  );
};
export default NoTask;

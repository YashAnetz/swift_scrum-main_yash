import { useState, useCallback, useEffect } from "react";
import { Outlet, useNavigate, useRevalidator } from "@remix-run/react";
import { useEventSource } from "remix-utils";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { toast } from 'react-toastify';
import { Project } from "@domain/project";
import { Category } from "@domain/category";
import { IssueId } from "@domain/issue";
import { Search } from "@app/ui/main/project/board/search";
import { Kbd } from "@app/components/kbd-placeholder";
import { UserAvatarList } from "./avatar-list";
import { SelectSort } from "./select-sort";
import { CategoryColumn } from "./category-column";
import { ProjectContextProvider } from "../project.store";
import { EVENTS } from "@app/events";

export const BoardView = ({ project }: Props): JSX.Element => {
  return (
    <ProjectContextProvider project={project}>
      <div className="box-border flex h-full flex-col">
       
        <DndProvider backend={HTML5Backend}>
          <Categories categories={project.categories} />
        </DndProvider>
         <section className="flex items-center">
          <Search />
          {/* 3 blocks */}
          <div style={{backgroundColor:'#2D4059', padding:'10px',color:'#ffd460',borderRadius:'10px'}} className="my-0 mx-4 inline">
            <UserAvatarList  users={project.users} />
          </div>
          <div style={{backgroundColor:'#2D4059', padding:'10px',color:'#ffd460',borderRadius:'10px',height:'65px'}} className="inline">
            <SelectSort />
          </div>
        </section>
        <Outlet />
      </div>
    </ProjectContextProvider>
  );
};

interface Props {
  project: Project;
}

const Categories = ({ categories }: CategoriesProps): JSX.Element => {
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [submittingIssues, setSubmittingIssues] = useState<IssueId[]>([]);
  const { revalidate } = useRevalidator();
  const navigate = useNavigate();

  const dataCreated = useEventSource("board/issue/issue-event", {
    event: EVENTS.ISSUE_CREATED,
  });

  const dataUpdated = useEventSource("board/issue/issue-event", {
    event: EVENTS.ISSUE_CHANGED,
  });

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.shiftKey && e.key.toLowerCase() === "n") {
        e.preventDefault();
        navigate("issue/new");
      }
    },
    [navigate]
  );

  useEffect(() => {
    setSubmittingIssues([]);
  }, [categories]);

  // Revalidate to update category columns on event received
  useEffect(() => {
    revalidate();
  }, [dataUpdated, revalidate]);

  useEffect(() => {
    window.addEventListener("keydown", onKeyDown);

    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onKeyDown]);

  return (
    <section className="mt-12 flex h-full flex-col">
     
      <div className="flex h-full gap-3 flex-row">
        {categories.map((category) => (
          <CategoryColumn 
            key={category.id}
            category={category}
            isDragging={isDragging}
            submittingIssues={submittingIssues}
            setSubmittingIssues={setSubmittingIssues}
            handleDragging={setIsDragging}
          />
        ))}
      </div>
      <span style={{color:'#ffd460'}}   className="mb-2 block justify-self-end font-primary-light text-2xs text-font-light text-opacity-80 dark:text-font-light-dark">
        Press <Kbd>Shift</Kbd> + <Kbd>N</Kbd> to create a new issue
      </span>
    </section>
  );
};

interface CategoriesProps {
  categories: Category[];
}

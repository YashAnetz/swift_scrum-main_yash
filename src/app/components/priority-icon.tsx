import cx from "classix";
import { HiFlag } from "react-icons/hi";
import { PriorityId } from "@domain/priority";
import { HiExclamation } from "react-icons/hi"

export const PriorityIcon = ({
  priority,
  size = 18,
}: PriorityIconProps): JSX.Element => (
  <span 
    className={cx(
      "flex",
      priority === "low" && "text-success-main",
      priority === "medium" && "text-warn-main",
      priority === "high" && "text-error-main"
    )}
  >
    <HiExclamation size={size} />
  </span>
);

interface PriorityIconProps {
  priority: PriorityId;
  size?: number;
}

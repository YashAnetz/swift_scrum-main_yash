import { useState } from "react";
import { Form } from "@remix-run/react";
import * as Select from "@radix-ui/react-select";
import { User, UserId, userMock1 } from "@domain/user";
import { UserAvatar } from "@app/components/user-avatar";
import logo from './logomain.png'
import {
  SelectContent,
  SelectTrigger,
  SelectTriggerIcon,
  SelectItem,
  SelectItemIndicator,
} from "@app/components/select";

export const LoginView = ({ users }: Props) => {
  const [selectedValue, setSelectedValue] = useState<User>(userMock1);

  const onValueChange = (userId: UserId) => {
    const foundUser = users.find((user) => user.id === userId);

    if (foundUser) {
      setSelectedValue(foundUser);
    }
  };

  return (
    <div className="mx-auto max-w-[800px] pt-[20vh]" style={{backgroundColor:'#2D4059',position:'relative', padding:'250px',borderRadius:'10px',top:'0px',left:'0',right:'0',left:'0',margin:'auto',height:'100vh'}}>
      <img src={logo}></img>
      <h1 style={{fontSize:'20px', color:'#ffd460'}}>Login to swiftScrum</h1>
      <h2 style={{fontSize:'20px', color:'white'}} className="mt-3 mb-8 font-primary-light text-lg text-font-dark dark:text-font-light-dark">
        Users have been added by your organization . Contact your admin to add new users. 
      </h2>
      <Form  method="post" className="mx-auto w-[300px]">
        <Select.Root 
          name="user"
          defaultValue={userMock1.id}
          onValueChange={onValueChange}
        >
          <SelectTrigger style={{backgroundColor:'#ffd460',borderRadius:'30px'}}
            className="flex w-full justify-between"
            aria-label="Open user select"
          >
            <div className="flex items-center gap-2">
              <UserAvatar {...selectedValue} />
              <Select.Value />
            </div>
            <SelectTriggerIcon />
          </SelectTrigger>
          <SelectContent>
            <Select.ScrollUpButton />
            <Select.Viewport>
              {users.map((user, index) => (
                <SelectItem key={index} value={user.id}>
                  <SelectItemIndicator />
                  <UserAvatar {...user} />
                  <Select.ItemText>{user.name}</Select.ItemText>
                </SelectItem>
              ))}
              <Select.Separator />
            </Select.Viewport>
            <Select.ScrollDownButton />
          </SelectContent>
        </Select.Root>
        <button style={{width:'100px', backgroundColor:'#FFD460', marginTop:'10px', height:'30px', borderRadius:'20px'} }
          type="submit"
          name="_action"
          value="setUser"
          aria-label="Login"
        >
          Login
        </button>
        <button style={{width:'150px', backgroundColor:'#FFD460', marginTop:'10px',marginLeft:'10px', height:'30px', borderRadius:'20px'} }
         
        >
          Contact Admin
        </button>
      </Form>
    </div>
  );
};

interface Props {
  users: User[];
}

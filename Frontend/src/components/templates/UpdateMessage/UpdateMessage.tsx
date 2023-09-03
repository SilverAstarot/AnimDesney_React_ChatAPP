import useAutosizeTextArea from "hooks/useAutosizeTextArea";
import { useEffect, useRef, useState } from "react";
import { useAppSelector, useAppDispatch } from "redux/hooks";
import MessageService from "services/message.service";
import { authActions } from "redux/slices/auth";
export default function UpdateMessage(message: any) {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState("");
  const { user } = useAppSelector((state) => state.auth);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const edit = useAppSelector((state) => state.auth.edit);
  const { messages } = useAppSelector((state) => state.message);

  const updateMessage = (value: any) => {
    console.log({ value });
    
    if (messages[edit].fromSelf) {
      let data = {
        id: messages[edit]._id,
        message: value,
        p_user: user,
        fromSelf: true
      };
      MessageService.updateMessage(data, dispatch);
    } else {
      let data = {
        id: messages[edit]._id,
        message: value,
        p_user: user
      };
      MessageService.updateChat(data, dispatch);
    }
    dispatch(authActions.setEdit(null));
  };

  useAutosizeTextArea(textAreaRef.current, value);

  useEffect(() => {
    setValue(message);
  }, []);

  return (
    <div
      contentEditable
      suppressContentEditableWarning
      
      onInput={(e) => {
        const eventTarget = e.target as HTMLElement;
        setValue(eventTarget.innerHTML)
      }}
     
      onKeyDown={(e: any) => {
        if (e.keyCode === 13 && !e.shiftKey) {
          e.preventDefault();
          // if (user) {
          const eventTarget = e.target as HTMLElement;
        
          updateMessage(eventTarget.innerHTML);
          // }
        }
      }}
    >{message.message}</div>
  );
}

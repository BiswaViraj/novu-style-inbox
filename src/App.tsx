import { Inbox } from "@novu/react";
import "./App.css";

const SUBSCRIBER_ID = "";
const APPLICATION_IDENTIFIER = "";

function App() {
  return (
    <>
      <Inbox
        applicationIdentifier={APPLICATION_IDENTIFIER}
        subscriberId={SUBSCRIBER_ID}
        backendUrl="http://localhost:3000"
        socketUrl="http://localhost:3002"
        appearance={{
          baseTheme: {
            variables: {
              colorBackground: "#23232B",
              colorForeground: "#FFFFFF",
              colorCounter: "#DD2476",
              colorPrimary: "#DD2476",
              colorSecondaryForeground: "#828299",
              colorNeutral: "#23232B",
            },
          },
          elements: {
            notificationPrimaryAction__button:
              "flex flex-center notification-btn notification-primary-action__button",
            notificationSecondaryAction__button:
              "flex flex-center notification-btn notification-secondary-action__button",
            notificationDot: {
              height: "0.5rem",
              width: "0.5rem",
              backgroundColor: "#369EFF",
              border: "none",
            },
            bellIcon: {
              color: "#828299",
            },

            notification: "notification-item",
            notificationDefaultActions: "notification-default-actions",
            dropdownItem: "dropdown-item",
            notificationsTabsTriggerCount: {
              background: "linear-gradient(90deg, #dd2476 0%, #ff512f 100%)",
            },
            notificationsTabs__tabsTrigger: "tabs-trigger",
            channelSwitchThumb: "channel-switch",
            notificationListNewNotificationsNotice__button: {
              background: "linear-gradient(90deg, #dd2476 0%, #ff512f 100%)",
            },
            tooltipContent: {
              backgroundColor: "#292933",
              color: "#828299",
            },
            notificationBody: "notification-content",
            channelSwitch: "channel-switch",
            workflowLabelContainer: "workflow-label-container",
          },
        }}
      />
    </>
  );
}

export default App;

import {
  Card,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  InboxIcon,
} from "@heroicons/react/24/solid";
 
export default function Sidebar() {
  return (
    <div className="absolute bg-slate-800 p-2 pb-72">
        <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 bg-slate-800">
          <List className="text-white flex flex-col">
              <ListItem>
                <ListItemPrefix>
                    <PresentationChartBarIcon className="h-5 w-5" />
                </ListItemPrefix>
                Politica ambiental
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                    <ShoppingBagIcon className="h-5 w-5" />
                </ListItemPrefix>
                Politica de calidad
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                    <InboxIcon className="h-5 w-5" />
                </ListItemPrefix>
                Cobertura Internacional
              </ListItem>
          </List>
        </Card>
    </div>
  );
}
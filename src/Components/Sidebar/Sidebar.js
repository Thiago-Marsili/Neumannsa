import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
 
export default function Sidebar() {
  return (
    <div className="absolute bg-slate-800 p-10 pb-96">
        <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
        <List>
            <ListItem>
            <ListItemPrefix>
                <PresentationChartBarIcon className="h-5 w-5" />
            </ListItemPrefix>
            <a href="">
            Politica ambiental
            </a>
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
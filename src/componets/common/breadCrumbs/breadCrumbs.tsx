import React from "react";
import { Breadcrumbs, BreadcrumbItem } from "@heroui/react";

export default function BreadCrumbsComponents() {
  const [currentPage, setCurrentPage] = React.useState("song");

  return (
    <Breadcrumbs
      underline="active"
      onAction={(key) => setCurrentPage(String(key))}
    >
      <BreadcrumbItem
        key="home"
        isCurrent={currentPage === "home"}
        classNames={{
          item: "text-gray-500 hover:text-blue-500",
        }}
      >
        خانه
      </BreadcrumbItem>
      <BreadcrumbItem
        key="hotel"
        isCurrent={currentPage === "hotel"}
        classNames={{
          item: "text-gray-500 hover:text-blue-500",
        }}
      >
        رزرو هتل
      </BreadcrumbItem>
      <BreadcrumbItem
        key="hotelplace"
        isCurrent={currentPage === "hotelplace"}
        classNames={{
          item: "text-gray-500 hover:text-blue-500",
        }}
      >
        رزرو هتل رشت
      </BreadcrumbItem>
    </Breadcrumbs>
  );
}

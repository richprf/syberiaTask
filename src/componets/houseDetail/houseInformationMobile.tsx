import {
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Tooltip,
} from "@heroui/react";
import HouseDetailAccardion from "./houseDetailAccardion";

export default function HouseInformationMobile() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Tooltip content="برای مشاهده مشخصات هتل کلیک کنید">
        <button
          onClick={onOpen}
          className="md:hidden border border-[#7474fefe] rounded-[100px] py-2 px-4 text-[#7474fefe]"
        >
          مشخصات هتل{" "}
        </button>
      </Tooltip>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <HouseDetailAccardion />
              </ModalBody>
              <ModalFooter></ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export default abstract class ResponseDto<DomainType> {
  abstract toDomain(): DomainType;
}
